"use client";

import { Column, Media, MasonryGrid, Tag, Text } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) => (
        <Column key={image.src} fillWidth gap="12" marginBottom="l">
          {image.type === "video" ? (
            <video
              aria-label={image.alt}
              controls
              playsInline
              preload="metadata"
              style={{
                aspectRatio: image.orientation === "horizontal" ? "16 / 9" : "3 / 4",
                borderRadius: "0.75rem",
                display: "block",
                objectFit: "cover",
                width: "100%",
              }}
            >
              <source src={image.src} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          ) : (
            <Media
              enlarge
              priority={index < 10}
              sizes="(max-width: 560px) 100vw, 50vw"
              radius="m"
              aspectRatio={
                image.orientation === "horizontal"
                  ? "16 / 9"
                  : image.orientation === "square"
                    ? "1 / 1"
                    : "3 / 4"
              }
              src={image.src}
              alt={image.alt}
            />
          )}
          <Column gap="8" paddingX="4">
            <Tag size="s">
              Original content by Jana
            </Tag>
            <Text variant="heading-strong-s">{image.title}</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {image.description}
            </Text>
          </Column>
        </Column>
      ))}
    </MasonryGrid>
  );
}
