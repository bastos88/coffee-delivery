import styled, { css, keyframes } from "styled-components";

type StepStatus = "idle" | "active" | "completed";

const stepIconPulse = keyframes`
  0% {
    transform: scale(1.04);
    box-shadow: 0 12px 24px rgba(128, 71, 248, 0.16);
  }

  50% {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 18px 34px rgba(128, 71, 248, 0.24);
  }

  100% {
    transform: scale(1.08);
    box-shadow: 0 14px 28px rgba(128, 71, 248, 0.2);
  }
`;

const particlePulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(128, 71, 248, 0.2), 0 8px 18px rgba(128, 71, 248, 0.18);
  }

  50% {
    box-shadow: 0 0 0 0.45rem rgba(128, 71, 248, 0), 0 10px 24px rgba(128, 71, 248, 0.26);
  }
`;

export const StepCard = styled.article<{ $status: StepStatus }>`
  && {
    ${({ $status, theme }) =>
      $status === "active" &&
      css`
        transform: translateY(-6px);
        border-color: rgba(128, 71, 248, 0.34);
        background:
          radial-gradient(circle at 84% 20%, rgba(128, 71, 248, 0.12), transparent 6rem),
          linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 241, 233, 0.98));
        box-shadow: 0 24px 48px rgba(75, 41, 149, 0.14);

        .step-icon {
          color: ${theme["white"]};
          background: ${theme["purple"]};
          animation: ${stepIconPulse} 600ms ease-in-out both;
        }

        .step-number {
          color: rgba(128, 71, 248, 0.16);
        }
      `}

    ${({ $status, theme }) =>
      $status === "completed" &&
      css`
        border-color: rgba(128, 71, 248, 0.22);

        &::after {
          content: "✓";
          opacity: 1;
          transform: scale(1);
        }

        .step-icon {
          color: ${theme["purple"]};
          border-color: rgba(128, 71, 248, 0.2);
          background:
            radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.82), transparent 45%),
            ${theme["purple-light"]};
        }

        .step-number {
          color: rgba(128, 71, 248, 0.12);
        }
      `}
  }
`;

export const IntroContainer = styled.section`
  position: relative;
  scroll-margin-top: 7rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 31rem);
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);
  width: min(100% - 2rem, 75rem);
  margin: clamp(1.5rem, 3vw, 2.5rem) auto clamp(3rem, 6vw, 5rem);
  padding: clamp(2rem, 5vw, 4.5rem);
  border: 1px solid rgba(64, 57, 55, 0.06);
  border-radius: 12px 48px 12px 48px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme["hero-light"]} 0%,
    #f8f1e9 100%
  );
  box-shadow: 0 20px 50px rgba(64, 57, 55, 0.06);

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    right: -8%;
    width: min(38vw, 32rem);
    aspect-ratio: 1;
    border-radius: 999px;
    background: radial-gradient(
      circle,
      rgba(241, 233, 201, 0.95) 0%,
      rgba(219, 172, 44, 0.18) 42%,
      rgba(255, 253, 249, 0) 72%
    );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    left: -4rem;
    bottom: 20%;
    width: 8rem;
    height: 8rem;
    border: 1px solid rgba(196, 127, 23, 0.12);
    border-radius: 999px;
    pointer-events: none;
  }

  > div {
    position: relative;
    z-index: 1;
  }

  > div:last-child {
    display: flex;
    justify-content: flex-end;

    img {
      width: min(100%, 30rem);
      filter: drop-shadow(0 2.25rem 2.75rem rgba(87, 79, 77, 0.18));
      transform: translateY(0);
      transition: transform 240ms ease, filter 240ms ease;
    }

    &:hover img {
      transform: translateY(-0.35rem);
      filter: drop-shadow(0 2.75rem 3rem rgba(87, 79, 77, 0.2));
    }
  }

  h1 {
    max-width: 40rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
    font-family: "Baloo 2", cursive;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: 0;
  }

  span {
    display: block;
    max-width: 35rem;
    color: ${(props) => props.theme["base-text"]};
    font-family: "Roboto", sans-serif;
    font-size: clamp(1rem, 1.8vw, 1.25rem);
    font-weight: 400;
    line-height: 1.55;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.875rem;
    max-width: 42rem;
    padding: 0;
    margin-top: clamp(2rem, 5vw, 3rem);
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    min-height: 4rem;
    padding: 0.875rem 1rem;
    border: 1px solid rgba(87, 79, 77, 0.08);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.78);
    box-shadow: 0 10px 28px rgba(64, 57, 55, 0.06);
    transition: transform 200ms ease, border-color 200ms ease,
      box-shadow 200ms ease;

    &:hover {
      transform: translateY(-2px);
      border-color: rgba(196, 127, 23, 0.2);
      box-shadow: 0 16px 40px rgba(87, 79, 77, 0.1);
    }
  }

  .icon-wrapper {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    margin-right: 0.75rem;
    border-radius: 9999px;
    color: ${(props) => props.theme["white"]};
    box-shadow: inset 0 -10px 20px rgba(39, 34, 33, 0.12);
  }

  li:nth-child(1) .icon-wrapper {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }

  li:nth-child(2) .icon-wrapper {
    background-color: ${(props) => props.theme["base-text"]};
  }

  li:nth-child(3) .icon-wrapper {
    background-color: ${(props) => props.theme["yellow"]};
  }

  li:nth-child(4) .icon-wrapper {
    background-color: ${(props) => props.theme["purple"]};
  }

  .icon-wrapper svg {
    width: 1rem;
    height: 1rem;
  }

  ul li p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Roboto", sans-serif;
    font-size: 0.94rem;
    font-weight: 500;
    line-height: 1.35;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding-top: 3rem;
    text-align: center;

    h1,
    span,
    ul {
      margin-right: auto;
      margin-left: auto;
    }

    > div:last-child {
      justify-content: center;
      order: 2;
    }
  }

  @media (max-width: 640px) {
    width: min(100% - 1.25rem, 75rem);
    padding: 1.5rem;
    margin-top: 1rem;
    text-align: left;

    h1,
    span,
    ul {
      margin-left: 0;
    }

    ul {
      grid-template-columns: 1fr;
    }

    li {
      min-height: 3.5rem;
    }
  }
`;

export const HowItWorksSection = styled.section`
  position: relative;
  scroll-margin-top: 7rem;
  overflow: hidden;
  padding: clamp(4.5rem, 8vw, 7rem) 1rem;
  border-top: 1px solid rgba(64, 57, 55, 0.08);
  border-bottom: 1px solid rgba(64, 57, 55, 0.08);
  background:
    radial-gradient(circle at 12% 18%, rgba(219, 172, 44, 0.16), transparent 22rem),
    radial-gradient(circle at 88% 78%, rgba(128, 71, 248, 0.12), transparent 20rem),
    ${(props) => props.theme["section-beige"]};

  &::before {
    content: "";
    position: absolute;
    top: 6rem;
    left: 50%;
    width: min(70rem, calc(100% - 4rem));
    height: 12rem;
    border: 1px solid rgba(128, 71, 248, 0.12);
    border-bottom: 0;
    border-radius: 999px 999px 0 0;
    transform: translateX(-50%);
    pointer-events: none;
  }

  .section-heading {
    width: min(100%, 75rem);
    margin: 0 auto 3.75rem;
    text-align: center;

    > span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 1.75rem;
      margin-bottom: 0.85rem;
      padding: 0 0.75rem;
      border: 1px solid rgba(196, 127, 23, 0.18);
      border-radius: 999px;
      color: ${(props) => props.theme["yellow-dark"]};
      background: rgba(255, 255, 255, 0.52);
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    h2 {
      margin-bottom: 0.5rem;
      color: ${(props) => props.theme["base-subtitle"]};
      font-family: "Baloo 2", cursive;
      font-size: clamp(2.35rem, 5vw, 3.35rem);
      font-weight: 800;
      line-height: 1.05;
    }

    p {
      max-width: 34rem;
      margin: 0 auto;
      color: ${(props) => props.theme["base-text"]};
      font-size: clamp(1rem, 2vw, 1.125rem);
      line-height: 1.6;
    }
  }

  .steps {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.25rem;
    width: min(100%, 75rem);
    margin: 0 auto;
    --connection-progress: 0%;
    --connection-width: 0%;
    --connection-mobile-height: 0%;
    --particle-position: 10%;
    --particle-mobile-position: 2rem;

    &::before {
      content: "";
      position: absolute;
      top: 5.35rem;
      right: 10%;
      left: 10%;
      height: 0.25rem;
      border-radius: 999px;
      background: linear-gradient(
        90deg,
        rgba(128, 71, 248, 0.08),
        rgba(128, 71, 248, 0.32),
        rgba(219, 172, 44, 0.34),
        rgba(128, 71, 248, 0.12)
      );
      pointer-events: none;
    }

    &::after {
      content: "";
      position: absolute;
      top: 5.35rem;
      left: 10%;
      width: var(--connection-width);
      height: 0.25rem;
      border-radius: 999px;
      background: linear-gradient(
        90deg,
        ${(props) => props.theme["purple"]},
        ${(props) => props.theme["yellow"]}
      );
      box-shadow: 0 8px 20px rgba(128, 71, 248, 0.18);
      transition: width 520ms cubic-bezier(0.645, 0.045, 0.355, 1);
      pointer-events: none;
    }

    &.is-connecting::after {
      box-shadow: 0 10px 24px rgba(128, 71, 248, 0.24);
    }

    &.is-connecting .connection-particle {
      background: ${(props) => props.theme["purple"]};
      transform: translateX(-50%) scale(1.22);
      animation: ${particlePulse} 620ms ease-in-out infinite;
    }
  }

  .connection-particle {
    position: absolute;
    z-index: 2;
    top: 5.125rem;
    left: var(--particle-position);
    width: 0.75rem;
    height: 0.75rem;
    border: 2px solid ${(props) => props.theme["surface"]};
    border-radius: 999px;
    background: ${(props) => props.theme["yellow"]};
    box-shadow: 0 8px 18px rgba(128, 71, 248, 0.18);
    transform: translateX(-50%);
    transition: left 520ms cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color 220ms ease, box-shadow 220ms ease;
    animation: ${particlePulse} 700ms ease-in-out both;
    pointer-events: none;
  }

  article {
    position: relative;
    z-index: 1;
    min-height: 17rem;
    padding: 1.5rem;
    border: 1px solid rgba(64, 57, 55, 0.08);
    border-radius: 18px 38px 18px 38px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 253, 249, 0.98));
    box-shadow: 0 14px 30px rgba(64, 57, 55, 0.07);
    transition: transform 220ms cubic-bezier(0.215, 0.61, 0.355, 1),
      box-shadow 220ms ease, border-color 220ms ease, background 220ms ease;

    &::before {
      content: "";
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 999px;
      background: rgba(128, 71, 248, 0.055);
      pointer-events: none;
    }

    &::after {
      content: "";
      position: absolute;
      top: 1.1rem;
      right: 1.1rem;
      display: grid;
      width: 1.35rem;
      height: 1.35rem;
      place-items: center;
      border-radius: 999px;
      color: ${(props) => props.theme["white"]};
      background: ${(props) => props.theme["purple"]};
      box-shadow: 0 8px 18px rgba(128, 71, 248, 0.2);
      opacity: 0;
      transform: scale(0.85);
      transition: opacity 180ms ease, transform 180ms ease;
      pointer-events: none;
    }

    &:nth-child(even) {
      margin-top: 1.25rem;
    }

    &:first-child,
    &:last-child {
      border-color: rgba(128, 71, 248, 0.16);
      box-shadow: 0 18px 36px rgba(75, 41, 149, 0.08);
    }

    &:hover {
      transform: translateY(-6px);
      border-color: rgba(128, 71, 248, 0.24);
      box-shadow: 0 22px 42px rgba(64, 57, 55, 0.12);

      .step-icon {
        transform: scale(1.06);
        color: ${(props) => props.theme["white"]};
        background: ${(props) => props.theme["purple"]};
      }
    }

  }

  .step-number {
    position: absolute;
    right: 1.15rem;
    bottom: 0.35rem;
    color: rgba(128, 71, 248, 0.08);
    font-family: "Baloo 2", cursive;
    font-size: 4.75rem;
    font-weight: 800;
    line-height: 1;
    pointer-events: none;
  }

  .step-icon {
    position: relative;
    z-index: 1;
    display: grid;
    width: 4rem;
    height: 4rem;
    place-items: center;
    margin-bottom: 1.35rem;
    border: 1px solid rgba(128, 71, 248, 0.1);
    border-radius: 999px;
    color: ${(props) => props.theme["purple"]};
    background:
      radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.82), transparent 45%),
      ${(props) => props.theme["purple-light"]};
    box-shadow: 0 12px 24px rgba(128, 71, 248, 0.12);
    transition: transform 200ms ease, color 200ms ease, background-color 200ms ease;
  }

  h3 {
    position: relative;
    z-index: 1;
    margin-bottom: 0.55rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.1rem;
    font-weight: 800;
    line-height: 1.3;
  }

  article p {
    position: relative;
    z-index: 1;
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.875rem;
    line-height: 1.55;
  }

  @media (max-width: 980px) {
    .steps {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      &::before {
        display: none;
      }
    }

    article:nth-child(even) {
      margin-top: 0;
    }
  }

  @media (max-width: 640px) {
    padding: 3.5rem 0.625rem;

    &::before {
      display: none;
    }

    .section-heading {
      margin-bottom: 2rem;
    }

    .steps {
      grid-template-columns: 1fr;
      gap: 1rem;

      &::before {
        display: block;
        top: 2rem;
        bottom: auto;
        left: 2rem;
        width: 0.2rem;
        height: var(--connection-mobile-height);
        border: 0;
        border-radius: 999px;
        background: linear-gradient(
          180deg,
          ${(props) => props.theme["purple"]},
          ${(props) => props.theme["yellow"]}
        );
        transform: none;
        transition: height 520ms cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      &::after {
        content: "";
        position: absolute;
        top: 2rem;
        bottom: 2rem;
        left: 2rem;
        width: 1px;
        border-left: 1px dashed rgba(128, 71, 248, 0.2);
        pointer-events: none;
      }
    }

    .connection-particle {
      top: var(--particle-mobile-position);
      left: 2rem;
      width: 0.65rem;
      height: 0.65rem;
      transform: translate(-50%, -50%);
      transition: top 520ms cubic-bezier(0.645, 0.045, 0.355, 1),
        background-color 220ms ease, box-shadow 220ms ease;
    }

    .steps.is-connecting .connection-particle {
      transform: translate(-50%, -50%) scale(1.2);
    }

    article {
      min-height: auto;
      padding: 1.25rem 1.25rem 1.25rem 5rem;
    }

    .step-icon {
      position: absolute;
      top: 1.25rem;
      left: 1.25rem;
      width: 3rem;
      height: 3rem;
      margin: 0;
    }

    .step-number {
      right: 1rem;
      bottom: 0.15rem;
      font-size: 3.6rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .steps,
    .steps::before,
    .steps::after,
    .connection-particle,
    article,
    article::after,
    .step-icon,
    .step-number {
      animation: none;
      transition: none;
    }

    article,
    article:hover,
    article.is-active {
      transform: none;
    }
  }
`;

export const CoffeeCardContainer = styled.section`
  scroll-margin-top: 7rem;
  width: 100%;
  margin: 0;
  padding: clamp(4rem, 7vw, 6rem) 1rem clamp(4.5rem, 8vw, 7rem);
  border-top: 1px solid rgba(64, 57, 55, 0.08);
  border-bottom: 1px solid rgba(64, 57, 55, 0.08);
  background: ${(props) => props.theme["section-beige"]};

  h1 {
    width: min(100%, 75rem);
    margin-right: auto;
    margin-bottom: 3.5rem;
    margin-left: auto;
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", cursive;
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 800;
    line-height: 1.15;
  }

  > div {
    width: min(100%, 75rem);
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    padding: 3.5rem 0.625rem 4.5rem;

    h1 {
      margin-bottom: 3rem;
    }
  }
`;

export const PremiumCtaSection = styled.section`
  width: min(100% - 2rem, 75rem);
  margin: clamp(3rem, 6vw, 5rem) auto clamp(2rem, 5vw, 4rem);
  overflow: hidden;
  border-radius: 10px 44px 10px 44px;
  background:
    radial-gradient(circle at 78% 28%, rgba(219, 172, 44, 0.18), transparent 34%),
    radial-gradient(circle at 18% 88%, rgba(128, 71, 248, 0.1), transparent 32%),
    linear-gradient(
      135deg,
      ${(props) => props.theme["section-beige-dark"]} 0%,
      #f4e9dc 100%
    );
  box-shadow: 0 18px 42px rgba(64, 57, 55, 0.08);

  > div {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(16rem, 27rem);
    align-items: center;
    gap: clamp(1.5rem, 4vw, 4rem);
    min-height: 20rem;
    padding: clamp(2rem, 5vw, 4rem);
  }

  span {
    display: inline-flex;
    width: fit-content;
    margin-bottom: 1rem;
    padding: 0.4rem 0.75rem;
    border: 1px solid rgba(241, 233, 201, 0.18);
    border-radius: 999px;
    color: ${(props) => props.theme["yellow-dark"]};
    background: rgba(255, 255, 255, 0.48);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 39rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme["base-title"]};
    font-family: "Baloo 2", cursive;
    font-size: clamp(2rem, 4vw, 3.25rem);
    font-weight: 800;
    line-height: 1.05;
  }

  p {
    max-width: 35rem;
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    line-height: 1.65;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-top: 1.75rem;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 3rem;
      padding: 0 1.15rem;
      border-radius: 10px;
      color: ${(props) => props.theme["base-title"]};
      background: ${(props) => props.theme["yellow"]};
      font-size: 0.9rem;
      font-weight: 800;
      text-decoration: none;
      text-transform: uppercase;
      transition: transform 200ms ease, background-color 200ms ease,
        box-shadow 200ms ease;

      &:last-child {
        color: ${(props) => props.theme["purple-dark"]};
        background: ${(props) => props.theme["surface"]};
        box-shadow: inset 0 0 0 1px rgba(64, 57, 55, 0.08);
      }

      &:hover {
        transform: translateY(-2px);
        background: ${(props) => props.theme["yellow-light"]};
        box-shadow: 0 16px 34px rgba(0, 0, 0, 0.18);
      }

      &:last-child:hover {
        color: ${(props) => props.theme["white"]};
        background: ${(props) => props.theme["purple"]};
      }

      &:focus-visible {
        outline: 2px solid ${(props) => props.theme["purple"]};
        outline-offset: 3px;
      }
    }
  }

  img {
    width: min(100%, 28rem);
    justify-self: end;
    filter: drop-shadow(0 2rem 2.5rem rgba(0, 0, 0, 0.26));
  }

  @media (max-width: 860px) {
    > div {
      grid-template-columns: 1fr;
      text-align: left;
    }

    img {
      justify-self: center;
      max-width: 24rem;
    }
  }

  @media (max-width: 640px) {
    width: min(100% - 1.25rem, 75rem);
    border-radius: 8px 30px 8px 30px;

    > div {
      padding: 1.5rem;
    }

    nav a {
      width: 100%;
    }
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  margin: 0;
  padding: 2rem max(1rem, calc((100% - 75rem) / 2)) 2.5rem;
  border-top: 1px solid rgba(87, 79, 77, 0.08);
  background: ${(props) => props.theme["section-beige-dark"]};
  color: ${(props) => props.theme["base-text"]};

  strong {
    display: block;
    margin-bottom: 0.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-family: "Baloo 2", cursive;
    font-size: 1.35rem;
    line-height: 1;
  }

  p {
    max-width: 34rem;
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.9rem;
    line-height: 1.5;
  }

  > span {
    flex: 0 0 auto;
    color: ${(props) => props.theme["purple-dark"]};
    font-size: 0.875rem;
    font-weight: 700;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;
