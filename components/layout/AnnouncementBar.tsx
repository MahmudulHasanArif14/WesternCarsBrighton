export default function AnnouncementBar() {
  return (
    <div className="bg-ink-900 text-sand-100 text-xs sm:text-sm">
      <div className="container-x py-2 flex items-center justify-center gap-2">
        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-forest-400 animate-pulse" />
        <span className="font-medium">
          24/7 service · Gatwick fixed fares · Book in under a minute
        </span>
      </div>
    </div>
  );
}
