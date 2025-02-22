import React from "react";

export type OverViewCardProps = {
  id: number;
  icon: React.ElementType;
  heading: string;
  money: string;
  report: string;
  color: string;
};

export type ProjectDataProps = {
  name: string;
  manager: string;
  dueDate?: string;
  status: string;
  progress?: number;
  color?: string;
};

export type TasksDataProps = {
  task: string;
  status: string;
  color: string;
};

export type WorkloadDataProps = {
  name: string;
  value: number;
};

export type TabsProps = {
  label: string;
  count: number | null;
};

export type userProfileProps = {
  id: string;
  userName: string;
  designation: string;
};
