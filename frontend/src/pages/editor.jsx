import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export default function Editor() {
  const [blog, setBlog] = useState("");
  const [FinalMdx, setFinalMdx] = useState("");

  async function test() {
    const resultMdx = await evaluate(blog, {
      ...runtime,
      remarkPlugins: [remarkGfm],
    });
    setFinalMdx(resultMdx.default);
  }

  useEffect(() => {
    test();
  }, [blog]);

  return (
    <div>
      <div className="m-10 grid grid-cols-2 gap-10 h-[calc(100vh-5rem)]">
        <div>
          <Label htmlFor="content">Write your content here</Label>
          <ScrollArea className="col-span-1">
            <Textarea
              value={blog}
              name="content"
              id="content"
              placeholder="Write your content here"
              className="h-[calc(100vh-5rem)] p-10"
              onChange={(e) => setBlog(e.target.value)}
            />
          </ScrollArea>
        </div>

        <div className="prose">
          <Label htmlFor="preview">View live preview here</Label>
          <ScrollArea
            className="rounded-md border col-span-1 p-10 h-[calc(100vh-5rem)]"
            name="preview"
            id="preview"
          >
            {FinalMdx}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
