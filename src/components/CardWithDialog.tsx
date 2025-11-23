import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface CardWithDialogProps {
  imageUrl: string
  imageAlt: string
  title: string
  description?: string
  content?: string
  pubDate?: Date
}

export default function CardWithDialog({
  imageUrl,
  imageAlt,
  title,
  description,
  content,
  pubDate,
}: CardWithDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-[15.5rem] bg-green-500 cursor-pointer hover:opacity-90 transition-opacity">
          <div className="p-2 border border-green-500">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-20 object-cover"
            />
            <div className="bg-red-500 text-black px-4">{title}</div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-base">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="mt-4">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
          )}
          {pubDate && (
            <p className="text-sm text-muted-foreground mb-4">
              Published: {new Date(pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          )}
          {content && (
            <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
