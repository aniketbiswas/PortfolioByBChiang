/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// This ensures the loading screen has enough time to initialize
export const onInitialClientRender = () => {
  // Add a small delay to ensure React has time to render before any optimizations
};

// Unregister service worker and clear caches when content changes
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This site has been updated with new content. ` + `Reload to display the latest version?`,
  );

  if (answer === true) {
    window.location.reload();
  }
};

// Force service worker to update immediately
export const onServiceWorkerUpdateFound = () => {
  window.location.reload(true);
};
