// vite.config.ts
import { defineConfig } from "file:///C:/Users/mansi/OneDrive/Documents/shruti/icse2027_workshop/ISEC27-Workshop/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/mansi/OneDrive/Documents/shruti/icse2027_workshop/ISEC27-Workshop/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/mansi/OneDrive/Documents/shruti/icse2027_workshop/ISEC27-Workshop/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\mansi\\OneDrive\\Documents\\shruti\\icse2027_workshop\\ISEC27-Workshop";
var vite_config_default = defineConfig(({ mode }) => {
  const isProd = mode === "production";
  return {
    base: isProd ? "/ISEC27-Workshop/" : "/",
    build: {
      outDir: "docs"
    },
    server: {
      host: "::",
      port: 8080
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtYW5zaVxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudHNcXFxcc2hydXRpXFxcXGljc2UyMDI3X3dvcmtzaG9wXFxcXElTRUMyNy1Xb3Jrc2hvcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbWFuc2lcXFxcT25lRHJpdmVcXFxcRG9jdW1lbnRzXFxcXHNocnV0aVxcXFxpY3NlMjAyN193b3Jrc2hvcFxcXFxJU0VDMjctV29ya3Nob3BcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL21hbnNpL09uZURyaXZlL0RvY3VtZW50cy9zaHJ1dGkvaWNzZTIwMjdfd29ya3Nob3AvSVNFQzI3LVdvcmtzaG9wL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGlzUHJvZCA9IG1vZGUgPT09IFwicHJvZHVjdGlvblwiO1xuXG4gIHJldHVybiB7XG4gICAgYmFzZTogaXNQcm9kID8gXCIvSVNFQzI3LVdvcmtzaG9wL1wiIDogXCIvXCIsXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogXCJkb2NzXCIsXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6IFwiOjpcIixcbiAgICAgIHBvcnQ6IDgwODAsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbcmVhY3QoKSwgbW9kZSA9PT0gXCJkZXZlbG9wbWVudFwiICYmIGNvbXBvbmVudFRhZ2dlcigpXS5maWx0ZXIoQm9vbGVhbiksXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ2EsU0FBUyxvQkFBb0I7QUFDN2IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUhoQyxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNLFNBQVMsU0FBUztBQUV4QixTQUFPO0FBQUEsSUFDTCxNQUFNLFNBQVMsc0JBQXNCO0FBQUEsSUFDckMsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsaUJBQWlCLGdCQUFnQixDQUFDLEVBQUUsT0FBTyxPQUFPO0FBQUEsSUFDOUUsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3RDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
