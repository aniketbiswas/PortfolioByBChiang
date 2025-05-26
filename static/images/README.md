# Adding Pixel Duck GIF to Loader

To complete setting up the pixel duck GIF loader:

1. Save the pixel duck image from your attachment as a GIF file
2. Name it `pixel-duck.gif`
3. Place it in this directory (`/static/images/`)
4. Restart the development server

## Alternative Option

If you prefer to use a different image:

1. Place your GIF file in this directory
2. Update the image path in `src/components/loader.js` to match your filename

Example:
```javascript
<img
  src="/images/your-custom-image.gif"
  alt="Loading Animation"
  className="loader-gif"
/>
```

## Technical Notes

- Images in the `/static` directory are served directly without processing
- The image path starts with `/` because it's relative to the site root
- The pulse animation effect is applied to any image used
