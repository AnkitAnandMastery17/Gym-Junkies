import React from "react";
import Card from "../components/Card";

export default function GuidePage() {
  return (
    <section>
      <div className="flex flex-col mx-auto max-w-screen-xl p-5">
        <h2 className="text-3xl font-bold sm:text-4xl">Gym Junkies</h2>
        <p className="mt-4 ">
        Gym Junkies is an enthusiastic community comprised of individuals 
        who have a profound love for physical fitness.We are a collective of passionate
        individuals driven by a desire to share our extensive knowledge and 
        expertise with others, fostering a community focused on promoting wellness and vitality.
        </p>
      </div>
      <Card />
    </section>
  );
}
