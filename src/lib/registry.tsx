"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";

export function useRegistry() {
  const [registry] = useState(() => new Map());

  useServerInsertedHTML(() => {
    const styles = [];
    for (const [id, style] of registry.entries()) {
      styles.push(
        <style
          key={id}
          dangerouslySetInnerHTML={{
            __html: style,
          }}
        />
      );
    }
    return <>{styles}</>;
  });

  return registry;
}

export function createStyleRegistry() {
  const cache = new Map();
  
  return {
    add: (id: string, css: string) => {
      if (!cache.has(id)) {
        cache.set(id, css);
      }
    },
    getRegistry: () => cache,
  };
}

