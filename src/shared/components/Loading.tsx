const Loading = () => {
  return (
    <div
      className="flex min-h-[240px] w-full items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <div className="w-full max-w-[520px] border border-(--border) bg-(--card) p-5">
        <div className="mb-5 flex items-center gap-3">
          <span className="size-2 animate-pulse rounded-full bg-(--accent)" />
          <span className="text-sm font-medium tracking-wide text-(--muted)">
            Loading
          </span>
        </div>

        <div className="animate-pulse space-y-4">
          <div className="h-5 w-2/5 bg-(--border)" />
          <div className="space-y-2">
            <div className="h-3 w-full bg-(--border)" />
            <div className="h-3 w-[92%] bg-(--border)" />
            <div className="h-3 w-[68%] bg-(--border)" />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="h-7 bg-(--border)" />
            <div className="h-7 bg-(--border)" />
            <div className="h-7 bg-(--border)" />
          </div>
        </div>
      </div>
      <span className="sr-only">Loading content</span>
    </div>
  );
};

export default Loading;