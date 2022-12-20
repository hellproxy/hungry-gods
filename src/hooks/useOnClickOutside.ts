import { RefObject, useEffect } from "react"

type Handler = (event: MouseEvent | TouchEvent) => void

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  refs: RefObject<T>[],
  handler: Handler
) {
  useEffect(
    () => {
      const listener: Handler = (event) => {
        // Type check
        if (!(event.target instanceof Element)) {
          return
        }

        // Do nothing if clicking ref's element or descendent elements
        for (const ref of refs) {
          if (!ref.current || ref.current.contains(event.target)) {
            return
          }
        }
        handler(event)
      }
      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)
      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [...refs, handler]
  )
}
