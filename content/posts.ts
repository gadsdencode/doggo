export type PlateId =
  | "path"
  | "rain"
  | "scent"
  | "porch"
  | "log"
  | "dad"
  | "happy";

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  plate: PlateId;
  blocks: Block[];
};

export const posts: Post[] = [
  {
    slug: "the-log-that-was-a-stick",
    title: "The log that was a stick",
    date: "2026-09-14",
    location: "The back woods",
    excerpt:
      "Happy promoted a branch to essential equipment. We negotiated the rest of the way home.",
    plate: "log",
    blocks: [
      {
        kind: "p",
        text: "The walk had a plan. Out along the tree line, loop the clearing, home before the light went flat. Happy had a plan too. His began the moment a fallen branch crossed the path at the exact length of his ambition.",
      },
      {
        kind: "p",
        text: "A lab will pick something up to bring it back to you. A hound will pick something up because the story is inside it. Happy is both, so the branch was retrieved and also investigated, which meant we stopped every few yards for a conference I was not qualified to join.",
      },
      {
        kind: "quote",
        text: "He carried the thick end. I carried the idea that we were still on a walk.",
      },
      {
        kind: "h2",
        text: "Installments",
      },
      {
        kind: "p",
        text: "The branch did not fit through the narrow part of the trail. Happy discovered this with his whole body, then tried a new angle, then tried commitment. I lifted the far end. We proceeded like a badly rehearsed parade: one puppy, one dad, one log that had been introduced to us as a stick.",
      },
      {
        kind: "p",
        text: "At the clearing he set it down, checked that I had witnessed the achievement, and picked it up again. The second half of the walk was slower and better. Some outings are about distance. This one was about an object that became the point.",
      },
      {
        kind: "p",
        text: "We left the branch at the edge of the yard. He looked back twice. I think he was filing the location. I wrote it down so I would remember which end of the leash had the better afternoon.",
      },
    ],
  },
  {
    slug: "porch-shift",
    title: "Porch shift",
    date: "2026-08-02",
    location: "The front steps",
    excerpt:
      "Evenings we sit the steps and take attendance of the street. Happy has not decided whether to greet the world or audit it.",
    plate: "porch",
    blocks: [
      {
        kind: "p",
        text: "After dinner the steps are the whole job. Happy sits with his chest square to the sidewalk and his ears doing separate work. I sit one step higher with a glass of water and the leash looped loose, in case a belief overtakes him.",
      },
      {
        kind: "p",
        text: "The hound half files every passerby: pace, pockets, whatever the air says they had for lunch. The lab half would like to greet them personally and at volume. We are still drafting the policy. The current draft is sit, watch, and receive a hand on the shoulder when the policy starts to slip.",
      },
      {
        kind: "quote",
        text: "He watches the street like it owes him a report. I watch him watch.",
      },
      {
        kind: "p",
        text: "A neighbor waved. Happy's tail answered before the rest of him voted. That is the mix in one motion: the hound holds the post, the lab sends regards. We stayed until the light went copper on the opposite windows.",
      },
      {
        kind: "p",
        text: "Porch shift is not a walk, and it counts anyway. He is learning the shape of an evening. I am learning which parts of the day he wants to supervise.",
      },
    ],
  },
  {
    slug: "what-the-nose-knows",
    title: "What the nose already knows",
    date: "2026-06-21",
    location: "The long block",
    excerpt:
      "I thought the walk was about getting somewhere. Happy thinks it is an inventory, and he is the only one with the catalog.",
    plate: "scent",
    blocks: [
      {
        kind: "p",
        text: "We made it four houses before the first full stop. Then a lamppost, a shrub, a crack in the sidewalk that smelled, to him, like a headline. I had scheduled a loop. He had scheduled a reading.",
      },
      {
        kind: "h2",
        text: "The leash is a suggestion",
      },
      {
        kind: "p",
        text: "A lab puppy wants to be near the person holding the handle. A hound puppy wants to be near whatever happened on this square of ground an hour ago. Happy splits the difference by trotting ahead, checking back, and then vanishing into a scent so complete that his name arrives a second late.",
      },
      {
        kind: "p",
        text: "I used to tug at the third sniff. Now I count to five and watch his ribs settle. There is a face he makes when the trail resolves: ears soft, a small exhale, the decision to move on. If I rush that, the walk becomes a commute. If I wait, it becomes the thing we actually went outside to do.",
      },
      {
        kind: "quote",
        text: "Every third step is a catalog entry I am not invited to read.",
      },
      {
        kind: "p",
        text: "We still reached the end of the block. It just took the time the block required. On the way home he walked closer, shoulder near my knee, as if the research portion had closed and the company portion had opened. Both are the walk. I am trying to keep up with the order.",
      },
    ],
  },
  {
    slug: "puddle-treaty",
    title: "Rain, and the puddle treaty",
    date: "2026-05-09",
    location: "The park path",
    excerpt:
      "The rule was to go around the water. Happy stepped in as if the puddle had been on the itinerary the whole time.",
    plate: "rain",
    blocks: [
      {
        kind: "p",
        text: "It had rained in the morning and then thought about raining again. I packed the short loop and a private rule: we go around standing water. Happy heard the rule the way puppies hear most rules, which is as a rumor.",
      },
      {
        kind: "p",
        text: "The first puddle was modest, a dark oval where the path dips. He approached in a straight line, paused with one paw lifted, and stepped in to the wrist. The look he gave me was not apology. It was confirmation that the water was real and excellent.",
      },
      {
        kind: "quote",
        text: "Policies, it turns out, are drafts.",
      },
      {
        kind: "p",
        text: "I updated the treaty on the spot. Puddles may be inspected. Full commitment requires a pause, so I can decide whether this is a splash or a bath. Happy agreed by splashing once more, smaller, and then trotting on as if diplomacy had been his idea.",
      },
      {
        kind: "p",
        text: "By the gate his legs were speckled and his mood was ceremonial. A lab will celebrate weather with his whole body. A hound will want to know what the rain uncovered. He did both, then shook it onto my shins at the exact moment I relaxed. Fair. The treaty did not mention shaking.",
      },
    ],
  },
  {
    slug: "the-first-real-walk",
    title: "The first real walk",
    date: "2026-04-18",
    location: "The sidewalk",
    excerpt:
      "The house had been the whole map. Then the door opened, and the map got much larger than a puppy.",
    plate: "path",
    blocks: [
      {
        kind: "p",
        text: "Before this morning, outside was the yard and the yard was the world. I clipped the leash, opened the gate, and Happy stepped onto the sidewalk like the ground had changed languages.",
      },
      {
        kind: "p",
        text: "A truck sighed at the corner. A leaf skated past and required an opinion. His paws did a small uncertain dance, then found a rhythm that was mostly sideways. I matched it. There is no dignified way to walk at puppy speed, and no reason to try.",
      },
      {
        kind: "h2",
        text: "The corner",
      },
      {
        kind: "p",
        text: "We made it to the corner and back. That was the whole expedition: one block, two pauses, a sit that was almost on purpose. He kept checking the door we had come from, then the open distance, then my knee. I kept saying his name in the ordinary voice, the one that means the day is fine.",
      },
      {
        kind: "quote",
        text: "He slept like he had crossed a country. The country was a corner.",
      },
      {
        kind: "p",
        text: "At home he folded up against my foot and was gone in a minute. I stayed still longer than I needed to. This journal starts there, on purpose. The adventures can get bigger. The first one only had to prove that the two of us could leave the house and come back.",
      },
    ],
  },
];
