import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SetupGuideModal({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass border-primary/30 max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Setup Guide</DialogTitle>
          <DialogDescription>
            A quick walkthrough to get RideFlow Driver running.
          </DialogDescription>
        </DialogHeader>
        <div className="aspect-video rounded-2xl bg-gradient-to-br from-card to-background border border-border grid place-items-center relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="relative text-center">
            <div className="inline-flex h-20 w-20 rounded-full bg-primary/20 border border-primary/40 grid place-items-center mb-4 glow-pulse">
              <PlayCircle className="h-10 w-10 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Video walkthrough coming soon</p>
          </div>
        </div>
        <ol className="text-sm text-muted-foreground space-y-2 mt-2 list-decimal list-inside">
          <li>Download the APK and install it.</li>
          <li>Open Android Accessibility settings.</li>
          <li>Enable RideFlow Driver permissions.</li>
          <li>Launch the app and complete setup.</li>
        </ol>
      </DialogContent>
    </Dialog>
  );
}
