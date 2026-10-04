import { motion } from "framer-motion";
import {
  FaSchool,
  FaMedal,
  FaHeartbeat,
  FaChalkboardTeacher,
} from "react-icons/fa";
import ScrollReveal from "../effects/ScrollReveal";
import { stats } from "../../data/stats";

const statItems = [
  {
    icon: FaSchool,
    image:
      "https://tis.edu.in/_next/static/media/schoolTopView.6e263e02.webp",
    alt: "Tulas International School campus",
  },
  {
    icon: FaMedal,
    image:
      "https://tis.edu.in/_next/static/media/image2.5d908b38.webp",
    alt: "Sports at Tulas International School",
  },
  {
    icon: FaHeartbeat,
    image:
      "https://tis.edu.in/_next/static/media/image3.b8273b93.png",
    alt: "Medical facilities at Tulas International School",
  },
  {
    icon: FaChalkboardTeacher,
    image:
      "https://tis.edu.in/_next/static/media/image1.a3011dda.png",
    alt: "Students playing guitar at Tulas International School",
  },
];

function StatBlock({ stat, Icon }) {
  return (
    <div className="group flex min-h-[240px] flex-col justify-between p-7 md:p-9">
      <Icon className="text-5xl text-[var(--color-secondary)] transition-transform duration-300 group-hover:-translate-y-2" />

      <div>
        <p className="text-5xl font-semibold tracking-tight md:text-6xl">
          {stat.value}
        </p>

        <p className="mt-3 text-sm uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

function ImageBlock({ image, alt }) {
  return (
    <div className="group h-full min-h-[240px] overflow-hidden">
      <motion.img
        src={image}
        alt={alt}
        className="h-full w-full object-cover"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </div>
  );
}

function Stats() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-primary)]">
              TIS at a glance
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              A campus built around the whole student.
            </h2>
          </div>

          {/* Desktop */}
          <div className="hidden overflow-hidden rounded-[2rem] border border-[var(--color-border)] lg:grid lg:grid-cols-4">
            {/* Row 1: 6:1 / Sports Image / 24×7 / Campus Image */}

            <div className="border-b border-r border-[var(--color-border)]">
              <StatBlock
                stat={stats[3]}
                Icon={statItems[3].icon}
              />
            </div>

            <div className="border-b border-r border-[var(--color-border)]">
              <ImageBlock
                image={statItems[1].image}
                alt={statItems[1].alt}
              />
            </div>

            <div className="border-b border-r border-[var(--color-border)]">
              <StatBlock
                stat={stats[2]}
                Icon={statItems[2].icon}
              />
            </div>

            <div className="border-b border-[var(--color-border)]">
              <ImageBlock
                image={statItems[0].image}
                alt={statItems[0].alt}
              />
            </div>

            {/* Row 2: Guitar Image / 16+ / Medical Image / 22 */}

            <div className="border-r border-[var(--color-border)]">
              <ImageBlock
                image={statItems[3].image}
                alt={statItems[3].alt}
              />
            </div>

            <div className="border-r border-[var(--color-border)]">
              <StatBlock
                stat={stats[1]}
                Icon={statItems[1].icon}
              />
            </div>

            <div className="border-r border-[var(--color-border)]">
              <ImageBlock
                image={statItems[2].image}
                alt={statItems[2].alt}
              />
            </div>

            <div>
              <StatBlock
                stat={stats[0]}
                Icon={statItems[0].icon}
              />
            </div>
          </div>

          {/* Mobile / Tablet */}
          <div className="grid gap-4 md:grid-cols-2 lg:hidden">
            {statItems.map((item, index) => (
              <div
                key={stats[index].label}
                className="overflow-hidden rounded-[2rem] border border-[var(--color-border)]"
              >
                <div className="h-60">
                  <ImageBlock
                    image={item.image}
                    alt={item.alt}
                  />
                </div>

                <StatBlock
                  stat={stats[index]}
                  Icon={item.icon}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Stats;