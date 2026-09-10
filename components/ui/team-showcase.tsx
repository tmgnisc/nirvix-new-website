"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaBehance, FaInstagram } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

interface TeamShowcaseProps {
  members: TeamMember[];
}

export default function TeamShowcase({ members }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex w-full max-w-5xl select-none flex-col items-start gap-8 px-4 py-8 font-sans md:flex-row md:gap-10 md:px-6 lg:gap-14">
      {/* ── Left: photo grid ── */}
      <div className="flex flex-shrink-0 gap-2 overflow-x-auto pb-1 md:gap-3 md:pb-0">
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-[120px] w-[110px] sm:h-[140px] sm:w-[130px] md:h-[165px] md:w-[155px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        <div className="mt-[48px] flex flex-col gap-2 sm:mt-[56px] md:mt-[68px] md:gap-3">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-[132px] w-[122px] sm:h-[155px] sm:w-[145px] md:h-[182px] md:w-[172px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        <div className="mt-[22px] flex flex-col gap-2 sm:mt-[26px] md:mt-[32px] md:gap-3">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="h-[125px] w-[115px] sm:h-[146px] sm:w-[136px] md:h-[172px] md:w-[162px]"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: member name list ── */}
      <div className="flex w-full flex-1 flex-col gap-4 pt-0 sm:grid sm:grid-cols-2 md:flex md:flex-col md:gap-5 md:pt-2">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card
───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        "relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl transition-opacity duration-300",
        className,
        isDimmed ? "opacity-60" : "opacity-100"
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(member.id)}
      onBlur={() => onHover(null)}
    >
      <Image
        src={member.image}
        alt={`${member.name} — ${member.role} at Nirvix Technology`}
        fill
        sizes="(max-width: 640px) 122px, (max-width: 768px) 145px, 172px"
        className="object-cover transition-[filter] duration-500"
        style={{
          filter: isActive ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(0.77)",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial =
    member.social?.twitter ??
    member.social?.linkedin ??
    member.social?.instagram ??
    member.social?.behance;

  return (
    <div
      className={cn(
        "cursor-pointer transition-opacity duration-300",
        isDimmed ? "opacity-50" : "opacity-100"
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social */}
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "h-3 w-4 flex-shrink-0 rounded-[5px] transition-all duration-300",
            isActive ? "w-5 bg-brand" : "bg-foreground/25"
          )}
        />
        <span
          className={cn(
            "text-base font-semibold leading-none tracking-tight transition-colors duration-300 md:text-[18px]",
            isActive ? "text-foreground" : "text-foreground/80"
          )}
        >
          {member.name}
        </span>

        {hasSocial && (
          <div
            className={cn(
              "ml-0.5 flex items-center gap-1.5 transition-all duration-200",
              isActive
                ? "translate-x-0 opacity-100"
                : "pointer-events-none -translate-x-2 opacity-0"
            )}
          >
            {member.social?.twitter && (
              <SocialLink href={member.social.twitter} title="X / Twitter">
                <FaTwitter size={10} />
              </SocialLink>
            )}
            {member.social?.linkedin && (
              <SocialLink href={member.social.linkedin} title="LinkedIn">
                <FaLinkedinIn size={10} />
              </SocialLink>
            )}
            {member.social?.instagram && (
              <SocialLink href={member.social.instagram} title="Instagram">
                <FaInstagram size={10} />
              </SocialLink>
            )}
            {member.social?.behance && (
              <SocialLink href={member.social.behance} title="Behance">
                <FaBehance size={10} />
              </SocialLink>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-1.5 pl-[27px] text-[8px] font-medium uppercase tracking-[0.2em] text-muted-foreground md:text-[10px]">
        {member.role}
      </p>
    </div>
  );
}

function SocialLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="rounded p-1 text-muted-foreground transition-all duration-150 hover:scale-110 hover:bg-foreground/10 hover:text-foreground"
      title={title}
      aria-label={title}
    >
      {children}
    </a>
  );
}
