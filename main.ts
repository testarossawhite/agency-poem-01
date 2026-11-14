type PoemLines = readonly string[];

const TRAILING_NEWLINE = "\n";

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
  return lines.join("\n");
}

function renderPoem(lines: PoemLines): string {
  const poem = joinLines(lines);

  return `${poem}${TRAILING_NEWLINE}`;
}

function main(): void {
  const output = renderPoem(poemLines);

  process.stdout.write(output);
}

main();
