import React, { useState } from "react";
import { Box, Grid, MenuItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StyledButton from "../../styled/StyledButton";
import StyledTextField from "../../styled/StyledTextField";
import StyledSelect from "../../styled/StyledSelect";
import StudentsListTable from "../Tables/StudentsList";
import { useForm } from "react-hook-form";

const selectOptions = {
  name: [""],
  fatherName: [""],
  class: [
    "- Class -",
    "PLAY GROUP",
    "KG (JUNIORS)",
    "KG (SENIORS)",
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
  ],
  gender: ["- Gender -", "Male", "Female", "Other"],
  category: ["- Category -", "Normal", "Special"],
  religion: ["- Religion -", "Islam", "Hindu", "Christian", "Sikh", "Others"],
  status: ["- Status -", "Active", "Inactive"],
  routes: ["- Routes -"],
  transport: ["- Transport -"],
  orderBy: ["- Order By -"],
};

const includes = (str, substr) => {
  return str.toLowerCase().includes(substr.toLowerCase());
};

function StudentsListContents({ students }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [filteredStudents, setFilteredStudents] = useState(
    JSON.parse(JSON.stringify(students))
  );

  const onSubmit = (data) => {
    let filtered = students;
    for (var prop in data) {
      if (data[prop] === selectOptions[prop][0]) {
        continue;
      }
      // eslint-disable-next-line no-loop-func
      filtered = filtered.filter((student) => {
        return prop === "name" || prop === "fatherName"
          ? includes(student[prop], data[prop])
          : student[prop] === data[prop];
      });
    }

    setFilteredStudents(filtered);
  };

  const unFilter = () => {
    setFilteredStudents(students);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Box sx={{ mt: 1, mb: 2 }}>
          <Grid container sx={{ mb: 1 }} rowGap={1}>
            <Grid item xs={12} md={2}>
              <StyledTextField
                {...register("name")}
                placeholder="Search Student Name"
              ></StyledTextField>
            </Grid>
            <Grid item xs={12} md={2}>
              <StyledTextField
                {...register("fatherName")}
                placeholder="Father Name"
              ></StyledTextField>
            </Grid>
            <Grid item xs={6} md={2}>
              <StyledSelect
                {...register("status")}
                defaultValue={selectOptions.status[0]}
              >
                {selectOptions.status.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
            <Grid item xs={6} md={2}>
              <StyledSelect
                {...register("category")}
                defaultValue={selectOptions.category[0]}
              >
                {selectOptions.category.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
            <Grid item xs={6} md={2}>
              <StyledSelect
                {...register("gender")}
                defaultValue={selectOptions.gender[0]}
              >
                {selectOptions.gender.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
            <Grid item xs={12} md={1.5}>
              <StyledButton onClick={unFilter} height="25px" width="100%">
                UnFilter
              </StyledButton>
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 1 }} rowGap={1}>
            <Grid item xs={6} md={2}>
              <StyledSelect
                {...register("class")}
                defaultValue={selectOptions.class[0]}
              >
                {selectOptions.class.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
            <Grid item xs={6} md={2}>
              <StyledSelect
                // {...register("transport")}
                defaultValue={selectOptions.transport[0]}
              >
                {selectOptions.transport.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
            <Grid item xs={6} md={2}>
              <StyledSelect
                {...register("religion")}
                defaultValue={selectOptions.religion[0]}
              >
                {selectOptions.religion.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
            <Grid item xs={6} md={2}>
              <StyledSelect
                {...register("routes")}
                defaultValue={selectOptions.routes[0]}
              >
                {selectOptions.routes.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
            <Grid item xs={6} md={2}>
              <StyledSelect
                // {...register("orderBy")}
                defaultValue={selectOptions.orderBy[0]}
              >
                {selectOptions.orderBy.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>

            <Grid item xs={12} md={1.5}>
              <StyledButton type="submit" height="25px" width="100%">
                Filter
              </StyledButton>
            </Grid>
          </Grid>
        </Box>
      </form>

      <StudentsListTable students={filteredStudents} />
    </Box>
  );
}

export default StudentsListContents;
