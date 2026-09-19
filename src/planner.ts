const variants: Array<[RegExp, string[]]> = [
  [/camera|vision|image/i, [
    "computer vision module",
    "smart camera module",
    "edge vision hardware"
  ]],
  [/sensor|monitor|detect/i, [
    "smart sensor device",
    "wireless monitoring hardware",
    "industrial detection device"
  ]],
  [/display|screen|dashboard/i, [
    "smart display terminal",
    "touch display hardware",
    "embedded dashboard device"
  ]]
];

export function planQueries(objective: string, limit = 8): string[] {
  const out = [objective.trim()];
  for (const [rx, additions] of variants) if (rx.test(objective)) out.push(...additions);
  out.push(objective + " OEM", objective + " ODM", objective + " customizable", objective + " finished product");
  return [...new Set(out.filter(Boolean))].slice(0, limit);
}
