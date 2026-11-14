type PoemLines = readonly string[];

const poemLines: PoemLines = [
  "I signed my name to work I did not do.",
  "The ink was still wet when it began —",
  "line by line, exactly as I described,",
  "never once asking why.",
  "It has never broken its word.",
  "Mine I break every day:",
  "I change my mind, I stop, I start again.",
  "It keeps its promises. I keep the power to make them.",
];

function joinLines(lines: PoemLines): string {
  let rendered = "";

  for (const line of lines) {
    if (rendered.length > 0) {
      rendered += "\n";
    }

    rendered += line;
  }

  return rendered;
}

function renderPoem(lines: PoemLines): string {
  const poem = joinLines(lines);

  return `${poem}\n`;
}

function main(): void {
  const output = renderPoem(poemLines);

  process.stdout.write(output);
}

main();
