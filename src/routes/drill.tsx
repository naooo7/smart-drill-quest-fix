import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Check, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Page, PageTitle, Surface } from "@/components/app-ui";
import { tiuMaterials } from "@/data/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/drill")({ head: () => ({ meta: [{ title: "Custom Drill — FastLearner" }, { name: "description", content: "Create a focused drill from your chosen SKD materials." }, { property: "og:title", content: "Custom Drill — FastLearner" }, { property: "og:description", content: "Create a focused drill from your chosen SKD materials." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: DrillPage });

function SelectPills({ options, value, onChange }: { options: string[]; value: string; onChange: (value: string) => void }) { return <div className="flex flex-wrap gap-2">{options.map((option) => <Button key={option} type="button" variant={value === option ? "default" : "outline"} onClick={() => onChange(option)}>{value === option && <Check />}{option}</Button>)}</div>; }

function DrillPage() {
  const navigate = useNavigate({ from: "/drill" });
  const [exam, setExam] = useState("SKD"); const [subtest, setSubtest] = useState("TIU");
  const [selected, setSelected] = useState(["tiu-4"]); const [count, setCount] = useState("15");
  const [difficulty, setDifficulty] = useState("All"); const [status, setStatus] = useState("All"); const [challenge, setChallenge] = useState(false);
  const toggle = (id: string) => setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  return <Page narrow><PageTitle eyebrow="Build your session" title="Custom Drill" subtitle="Choose what to focus on. You can change any setting before starting." />
    <div className="space-y-4">
      <Surface><Step n="1" title="Choose Exam" /><SelectPills options={["SKD", "UTBK"]} value={exam} onChange={(value) => { setExam(value); if (value === "UTBK") window.alert("UTBK content is coming soon. SKD remains selected for this drill."); else setExam(value); }} /></Surface>
      <Surface><Step n="2" title="Choose Subtest" /><SelectPills options={["TWK", "TIU", "TKP"]} value={subtest} onChange={(value) => { setSubtest(value); if (value !== "TIU") window.alert(`${value} is selectable in the prototype. TIU materials remain shown as the complete example.`); }} /></Surface>
      <Surface><Step n="3" title="Choose Materials" /><div className="grid gap-2 sm:grid-cols-2">{tiuMaterials.map((item) => { const active = selected.includes(item.id); return <label key={item.id} className={cn("flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition-colors", active ? "border-primary bg-accent" : "border-border bg-background hover:bg-secondary")}><Checkbox checked={active} onCheckedChange={() => toggle(item.id)} /><span className="text-sm font-medium">{item.name}</span></label>; })}</div></Surface>
      <Surface><Step n="4" title="Number of Questions" /><SelectPills options={["10", "15", "20", "30"]} value={count} onChange={setCount} /></Surface>
      <Surface><Step n="5" title="Difficulty" /><SelectPills options={["All", "Easy", "Medium", "Hard"]} value={difficulty} onChange={setDifficulty} /></Surface>
      <Surface><Step n="6" title="Question Status" /><SelectPills options={["All", "Unanswered", "Incorrect", "Needs Review", "Mastered"]} value={status} onChange={setStatus} /></Surface>
      <Surface className="flex items-start justify-between gap-6"><div><Step n="7" title="Challenge Mode" compact /><p className="mt-2 text-sm text-muted-foreground">60 sec / question. Questions that exceed the time limit are counted as incorrect.</p></div><Switch checked={challenge} onCheckedChange={setChallenge} aria-label="Challenge mode" className="mt-1" /></Surface>
    </div>
    <div className="sticky bottom-21 z-20 mt-6 rounded-2xl border border-border bg-background/90 p-3 shadow-float backdrop-blur-xl md:bottom-4"><Button size="lg" className="w-full" disabled={selected.length === 0} onClick={() => navigate({ to: "/question", search: { source: "custom", material: selected[0] ?? "tiu-4", count: Number(count), difficulty: "All", status: "All", challenge: false } })}><SlidersHorizontal /> Start Drill · {count} Questions</Button></div>
  </Page>;
}
function Step({ n, title, compact = false }: { n: string; title: string; compact?: boolean }) { return <div className={cn("flex items-center gap-3", !compact && "mb-5")}><span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-muted-foreground">{n}</span><h2 className="font-display text-lg font-bold">{title}</h2></div>; }