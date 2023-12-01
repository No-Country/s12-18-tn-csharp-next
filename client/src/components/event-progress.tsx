"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

interface Props {
  collected: number;
  goal: number;
}

const EventProgress = ({ collected, goal }: Props) => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const percentage = (collected / goal) * 100;

    const boundedProgress = Math.min(Math.max(percentage, 0), 100);

    const timer = setTimeout(() => setProgress(boundedProgress), 300);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[100%]" />;
};

export default EventProgress;
