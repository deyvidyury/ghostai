import { EditorLayout } from "@/components/editor/editor-layout"

export default function Home() {
  return (
    <EditorLayout>
      <div className="flex flex-1 items-center justify-center">
        <span className="text-muted-foreground text-sm">Editor canvas</span>
      </div>
    </EditorLayout>
  )
}
