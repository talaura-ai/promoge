import {
  OverViewCardProps,
  ProjectDataProps,
  TabsProps,
  TasksDataProps,
  userProfileProps,
  WorkloadDataProps,
} from "../../types/types";

// icons
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PersonIcon from "@mui/icons-material/Person";

export const overViewCardDetaisl: OverViewCardProps[] = [
  {
    id: 1,
    icon: QueryStatsIcon,
    heading: "Total Revenue",
    money: "$530,000",
    report: "12% increase from last month",
    color: "#cc9dd7",
  },
  {
    id: 2,
    icon: BusinessCenterIcon,
    heading: "Projects",
    money: "92 /100",
    report: "12% increase from last month",
    color: "#bb6242",
  },
  {
    id: 3,
    icon: QueryBuilderIcon,
    heading: "Time spent",
    money: "1022 /1300 Hrs",
    report: "12% increase from last month",
    color: "#6fa1e5",
  },
  {
    id: 4,
    icon: PersonIcon,
    heading: "Resources",
    money: "101 /120",
    report: "12% increase from last month",
    color: "#daa23e",
  },
];

export const projectHeader: string[] = [
  "Name",
  "Project Manager",
  "Due Date",
  "Status",
  "Progress",
];

export const projectData: ProjectDataProps[] = [
  {
    name: "All",
    manager: "All",
    status: "All",
  },
  {
    name: "Nelsa web development",
    manager: "Om Prakash Sao",
    dueDate: "May 25, 2023",
    status: "Completed",
    progress: 100,
    color: "67, 155, 106",
  },
  {
    name: "Datascale AI app",
    manager: "Neilsan Mando",
    dueDate: "Jun 20, 2023",
    status: "Delayed",
    progress: 35,
    color: "210, 153, 70",
  },
  {
    name: "Media channel branding",
    manager: "Tiruvelly Priya",
    dueDate: "July 13, 2023",
    status: "At risk",
    progress: 68,
    color: "294, 94, 42",
  },
  {
    name: "Corlax iOS app development",
    manager: "Matte Hannery",
    dueDate: "Dec 20, 2023",
    status: "Completed",
    progress: 100,
    color: "67, 155, 106",
  },
  {
    name: "Website builder development",
    manager: "Sukumar Rao",
    dueDate: "Mar 15, 2024",
    status: "On going",
    progress: 50,
    color: "215, 95, 54",
  },
];

export const taskData: TasksDataProps[] = [
  {
    task: "Create a user flow of social application design",
    status: "Approved",
    color: "67, 155, 106",
  },
  {
    task: "Create a user flow of social application design",
    status: "In review",
    color: "294, 94, 42",
  },
  {
    task: "Landing page design for Fintech project of Singapore",
    status: "In review",
    color: "294, 94, 42",
  },
  {
    task: "Interactive prototype for app screens of deltamime project",
    status: "On going",
    color: "215, 95, 54",
  },
  {
    task: "Interactive prototype for app screens of deltamime project",
    status: "Approved",
    color: "67, 155, 106",
  },
];

export const workloadData: WorkloadDataProps[] = [
  { name: "Sam", value: 7 },
  { name: "Meldy", value: 8 },
  { name: "Ken", value: 2 },
  { name: "Dmitry", value: 10 },
  { name: "Vego", value: 8 },
  { name: "Kadin", value: 2 },
  { name: "Melm", value: 4 },
];

export const tabs: TabsProps[] = [
  { label: "All", count: 10 },
  { label: "Important", count: null },
  { label: "Notes", count: 5 },
  { label: "Links", count: 10 },
];

export const userProfile: userProfileProps[] = [
  {
    id: "1",
    userName: "Alex Ben",
    designation: "Product Manager",
  },
  {
    id: "2",
    userName: "Shimon Menon",
    designation: "Business Head",
  },
  {
    id: "2",
    userName: "Marc Stone",
    designation: "Creative Head",
  },
];
