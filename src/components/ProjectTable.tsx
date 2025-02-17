import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ProjectDataProps } from "../types/types";
import CircularPercantage from "./ui/CircularProgress";

type ProjectTableProps = {
  projectHeader: string[];
  projectData: ProjectDataProps[];
};

const ProjectTable = ({ projectHeader, projectData }: ProjectTableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {projectHeader.map((table: string, index: number) => {
              return (
                <TableCell sx={{ fontWeight: "500" }} key={index}>
                  {table}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {projectData.map((project: ProjectDataProps) => (
            <TableRow key={project.name}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.manager}</TableCell>
              <TableCell>{project.dueDate}</TableCell>
              <TableCell>
                <Chip
                  label={project.status}
                  sx={{
                    bgcolor: `rgba(${project.color}, 0.3)`,
                    color: `rgba(${project.color}, 1)`,
                  }}
                />
              </TableCell>
              <TableCell>
                <CircularPercantage
                  value={project.progress}
                  color={`rgba(${project.color}, 1)`}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectTable;
