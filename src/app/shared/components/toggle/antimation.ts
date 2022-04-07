import { Component } from "@angular/core";
import {
  trigger,
  state,
  animate,
  query,
  group,
  transition,
  style,
  stagger
} from "@angular/animations";
export let fade = trigger("fade", [
  state("inactive", style({ opacity: 0 })),
  state("active", style({ opacity: 1 })),
  transition("* <=> *", [animate(2000)])
]);

export let slide = trigger("slide", [
  state("active", style({ opacity: 1, transform: "translateY(0)" })),
  state("inactive", style({ opacity: 0, transform: "translateY(-100%)" })),
  state("final", style({ opacity: 0, transform: "translateY(-100%)" })),
  // transition("* => *", [
  //   style({ transform: "translateY(100%)", opacity: 0 }),
  //   animate(1000, style({ transform: "translateY(-100%)", opacity: 1 }))
  // ]),
  transition("active => inactive", [
    style({ transform: "translateY(100%)", opacity: 0 }),
    animate("2s", style({ transform: "translateY(-100%)", opacity: 1 }))
  ])
]);

export let slideInOut = trigger("slideInOut", [
  state(
    "in",
    style({
      "max-height": "2000px",
      opacity: "1",
      visibility: "visible"
    })
  ),
  state(
    "out",
    style({
      "max-height": "0px",
      opacity: "0",
      visibility: "hidden"
    })
  ),
  transition("in => out", [
    group([
      animate(
        "400ms ease-in-out",
        style({
          opacity: "0"
        })
      ),
      animate(
        "600ms ease-in-out",
        style({
          "max-height": "0px"
        })
      ),
      animate(
        "700ms ease-in-out",
        style({
          visibility: "hidden"
        })
      )
    ])
  ]),
  transition("out => in", [
    group([
      animate(
        "1ms ease-in-out",
        style({
          visibility: "visible"
        })
      ),
      animate(
        "600ms ease-in-out",
        style({
          "max-height": "1000px"
        })
      ),
      animate(
        "800ms ease-in-out",
        style({
          opacity: "1"
        })
      )
    ])
  ])
]);

export let listAnimation = trigger("listAnimation", [
  transition("* => *", [
    // each time the binding value changes
    query(
      ":enter",
      [
        stagger(1000, [
          style({ transform: "translateY(100%)", opacity: 0 }),
          animate("1s", style({ transform: "translateY(-100%)", opacity: 1 }))
        ])
      ],
      {
        optional: true
      }
    )
  ])
]);
