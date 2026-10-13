
import {
  type MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Overview", href: "#overview" },
  { label: "Topics", href: "#discussion" },
  { label: "Reviewers", href: "#program-chairs" },
  { label: "Schedule", href: "#format" },
  { label: "Organizers", href: "#organizers" },
];

const sectionOrder = [
  "home",
  "overview",
  "discussion",
  "cfp",
  "program-chairs",
  "format",
  "organizers",
];

const publicationPolicyUrl =
  "https://conf.researchr.org/track/isec-2027/isec-2027-research-papers#call-Publication-Policy";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submissionOpen, setSubmissionOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      let currentSection = "home";
      const offset = 110;

      const sections = sectionOrder
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null)
        .sort(
          (a, b) =>
            a.getBoundingClientRect().top -
            b.getBoundingClientRect().top
        );

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: globalThis.MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSubmissionOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSubmissionOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    setMobileOpen(false);
    setSubmissionOpen(false);

    const target = document.querySelector(href);

    if (!target) return;

    const offset = 85;

    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });

    setActiveSection(href.replace("#", ""));
    window.history.replaceState(null, "", href);
  };

  const renderNavLink = (
    item: { label: string; href: string },
    mobile = false
  ) => {
    const sectionId = item.href.substring(1);
    const isActive = activeSection === sectionId;

    return (
      <a
        key={item.href}
        href={item.href}
        aria-current={isActive ? "location" : undefined}
        onClick={(event) => handleNavClick(event, item.href)}
        className={`
          relative rounded-md text-sm font-medium
          transition-all duration-200
          ${mobile ? "block px-4 py-3" : "px-3 py-2"}
          ${
            isActive
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
          }
        `}
      >
        {item.label}

        {isActive && !mobile && (
          <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary" />
        )}
      </a>
    );
  };

  return (
    <header
      className={`
        sticky top-0 z-50 w-full
        border-b border-border transition-all duration-300
        ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-md"
            : "bg-background/80 backdrop-blur-md"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex h-16 md:h-[72px] items-center justify-between">

          {/* Branding */}
          <div className="flex shrink-0 items-center">
            <div>
              <div className="text-base md:text-lg font-bold text-foreground leading-tight">
                <a
                  href="#home"
                  onClick={(event) => handleNavClick(event, "#home")}
                >
                  GenAI&SE
                </a>{" "}
                <a
                  href="https://conf.researchr.org/home/isec-2027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  @ ISEC&apos;27
                </a>
              </div>

              <div className="hidden sm:block mt-0.5 text-[11px] md:text-xs text-muted-foreground">
                Co-Pilots to Actors
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navItems.slice(0, 3).map((item) =>
              renderNavLink(item)
            )}

            {/* Submission Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-expanded={submissionOpen}
                aria-haspopup="true"
                aria-controls="submission-menu"
                onClick={() => setSubmissionOpen(!submissionOpen)}
                className={`
                  relative flex items-center gap-1
                  px-3 py-2 rounded-md text-sm font-medium
                  transition-all duration-200
                  ${
                    activeSection === "cfp"
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                  }
                `}
              >
                Submission

                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    submissionOpen ? "rotate-180" : ""
                  }`}
                />

                {activeSection === "cfp" && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-primary" />
                )}
              </button>

              {submissionOpen && (
                <div
                  id="submission-menu"
                  className="
                    absolute left-0 top-full mt-2 w-56
                    rounded-lg border border-border
                    bg-background p-2 shadow-lg
                  "
                >
                  <a
                    href="#cfp"
                    onClick={(event) => handleNavClick(event, "#cfp")}
                    className="
                      block rounded-md px-3 py-2.5 text-sm
                      text-foreground hover:bg-primary/10
                      hover:text-primary
                    "
                  >
                    Call for Papers
                  </a>

                  <a
                    href={publicationPolicyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSubmissionOpen(false)}
                    className="
                      flex items-center justify-between
                      rounded-md px-3 py-2.5 text-sm
                      text-foreground hover:bg-primary/10
                      hover:text-primary
                    "
                  >
                    Publication Policy
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>

            {navItems.slice(3).map((item) =>
              renderNavLink(item)
            )}
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              lg:hidden rounded-lg p-2
              text-foreground hover:bg-primary/10
            "
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="
              lg:hidden max-h-[calc(100dvh-4rem)]
              overflow-y-auto border-t border-border py-3
            "
          >
            <div className="flex flex-col gap-1 pb-2">
              {navItems.slice(0, 3).map((item) =>
                renderNavLink(item, true)
              )}

              {/* Mobile Submission Dropdown */}
              <div>
                <button
                  type="button"
                  aria-expanded={submissionOpen}
                  aria-controls="mobile-submission-menu"
                  onClick={() => setSubmissionOpen(!submissionOpen)}
                  className={`
                    flex w-full items-center justify-between
                    rounded-lg px-4 py-3 text-left
                    text-sm font-medium
                    ${
                      activeSection === "cfp"
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-primary/5"
                    }
                  `}
                >
                  Submission
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      submissionOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {submissionOpen && (
                  <div
                    id="mobile-submission-menu"
                    className="ml-4 mt-1 space-y-1 border-l-2 border-primary/20 pl-3"
                  >
                    <a
                      href="#cfp"
                      onClick={(event) => handleNavClick(event, "#cfp")}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      Call for Papers
                    </a>

                    <a
                      href={publicationPolicyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setMobileOpen(false);
                        setSubmissionOpen(false);
                      }}
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      Publication Policy
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {navItems.slice(3).map((item) =>
                renderNavLink(item, true)
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
