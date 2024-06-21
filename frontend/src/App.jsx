import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function App() {
  const [blog, setBlog] = useState("");

  console.log(blog);

  return (
    <div>
      <div className="m-10 grid grid-cols-2 gap-10 h-[calc(100vh-5rem)]">
        <div>
          <Label htmlFor="content">Write your content here</Label>
          <ScrollArea className="col-span-1">
            <Textarea
              name="content"
              id="content"
              placeholder="Write your content here"
              className="h-[calc(100vh-5rem)] p-10"
              onChange={(e) => setBlog(e.target.value)}
            />
          </ScrollArea>
        </div>

        <div>
          <Label htmlFor="preview">View live preview here</Label>
          <ScrollArea
            className="rounded-md border col-span-1 p-10 h-[calc(100vh-5rem)]"
            name="preview"
            id="preview"
          >
            <Markdown remarkPlugins={[remarkGfm]}>{blog}</Markdown>
          </ScrollArea>
        </div>
      </div>
      <div>{blog}</div>
    </div>
  );
}
