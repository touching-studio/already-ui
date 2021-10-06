export function observeMutation(element: HTMLElement, options: MutationObserverInit, handlers: ((record: MutationRecord) => void)[]) {
  const mutationObserver = new MutationObserver(entries => {
    entries.forEach(record => {
      handlers.forEach(handler => handler.call(this, record))
    });
  });
  mutationObserver.observe(element, options);
}