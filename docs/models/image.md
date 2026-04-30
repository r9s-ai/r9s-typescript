# Image

The image(s) to edit. Must be a supported image file or an array of images.

For the GPT image models (gpt-image-1, gpt-image-1-mini, and gpt-image-1.5):
- Each image should be a png, webp, or jpg file less than 50MB
- You can provide up to 16 images

For dall-e-2:
- You can only provide one image
- It should be a square png file less than 4MB



## Supported Types

### `models.ImageEditRequest1`

```typescript
const value: models.ImageEditRequest1 = await openAsBlob("example.file");
```

### `models.ImageEditRequest2[]`

```typescript
const value: models.ImageEditRequest2[] = [];
```

