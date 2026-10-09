
import { type MouseEvent, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Overview", href: "#overview" },
  { label: "Discussion", href: "#discussion" },
  { label: "Reviewers", href: "#program-chairs" },
  { label: "CFP", href: "#cfp" },
  { label: "Schedule", href: "#format" },
  { label: "Organizers", href: "#organizers" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Navbar background
      setScrolled(scrollY > 20);

      // Offset for sticky navbar
      const offset = 110;

      let currentSection = "home";

      for (const item of navItems) {
        const section = document.querySelector(item.href);

        if (!section) continue;

        const sectionTop =
          (section as HTMLElement).offsetTop - offset;

        if (scrollY >= sectionTop) {
          currentSection = item.href.replace("#", "");
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

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setMobileOpen(false);

    const target = document.querySelector(href);

    if (!target) return;

    const offset = 80;

    const targetTop =
      target.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });

    setActiveSection(href.replace("#", ""));
  };

  return (
    <header
      className={`
        sticky top-0 z-50 w-full
        transition-all duration-300
        ${scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-md border-b border-primary/10"
          : "bg-background/80 backdrop-blur-md border-b border-primary/5"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar Row */}
        <div className="flex h-16 md:h-[72px] items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={(event) =>
              handleNavClick(event, "#home")
            }
            className="flex items-center shrink-0"
          >
            <div>
              <div className="text-base md:text-lg font-bold text-foreground leading-tight">
                GenAI&SE
                <span className="text-primary">
                  {" "}@ ISEC&apos;27
                </span>
              </div>

              <div className="hidden sm:block text-[11px] md:text-xs text-muted-foreground leading-tight mt-0.5">
                Co-Pilots to Actors
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive =
                activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) =>
                    handleNavClick(event, item.href)
                  }
                  className={`
                    relative
                    px-3 py-2
                    text-sm
                    font-medium
                    rounded-md
                    transition-all
                    duration-200
                    ${isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                    }
                  `}
                >
                  {item.label}

                  {/* Active underline */}
                  {isActive && (
                    <span
                      className="
                        absolute
                        left-3
                        right-3
                        bottom-0
                        h-0.5
                        rounded-full
                        bg-primary
                      "
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="
              lg:hidden
              inline-flex
              items-center
              justify-center
              rounded-lg
              p-2
              text-foreground
              transition-colors
              hover:bg-primary/10
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
          <nav className="lg:hidden border-t border-primary/10 py-3">
            <div className="flex flex-col gap-1 pb-2">

              {navItems.map((item) => {
                const sectionId =
                  item.href.replace("#", "");

                const isActive =
                  activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) =>
                      handleNavClick(
                        event,
                        item.href
                      )
                    }
                    className={`
                      px-4 py-3
                      rounded-lg
                      text-sm
                      font-medium
                      transition-all
                      ${isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                );
              })}

            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
