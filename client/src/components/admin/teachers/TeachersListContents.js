import { Box, Grid, MenuItem } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useForm } from "react-hook-form";
import StyledButton from "../../styled/StyledButton";
import StyledSelect from "../../styled/StyledSelect";
import StyledTextField from "../../styled/StyledTextField";
import TeachersList from "../Tables/TeachersList";
import { includes } from "../../../utils/string";

const selectOptions = {
  name: [''],
  gender: ["- Gender -", "Male", "Female", "Other"],
  status: ["- Status -", "Active", "Inactive"],
};

function TeachersListContents({ teachers  }) {
  // console.log(teachers)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [filteredTeachers, setFilteredTeachers] = useState(
    JSON.parse(JSON.stringify(teachers))
  );

  // console.log("filteredTeachers:", filteredTeachers);

  const onSubmit = (data) => {
    let filtered = teachers;
    for (var prop in data) {
      if (data[prop] === selectOptions[prop][0]) {
        continue;
      }

      // eslint-disable-next-line no-loop-func
      filtered = filtered.filter((teacher) => {
        return prop === "name"
          ? includes(`${teacher.firstName} ${teacher.lastName}`, data[prop])
          : teacher[prop] === data[prop];
      });
    }

    setFilteredTeachers(filtered);
  };
  // const onSubmit = (data) => {
  //   let { name, gender, status } = data;
  //   console.log(name, gender, status);
  //   if (gender === "- Gender -") gender = "";
  //   if (status === "- Status -") status = "";
  //   const filtered = teachers.filter((teacher) => {
  //     return (
  //       `${teacher.firstName} ${teacher.lastName}`
  //         .toLowerCase()
  //         .includes(name.toLowerCase()) &&
  //       teacher.gender.includes(gender) &&
  //       teacher.status.includes(status) 
  //     );
  //   });
  //   setFilteredTeachers(filtered);
  // };

  const unFilter = () => {
    setFilteredTeachers(teachers);
  }

  return (
    <Box>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Box sx={{ my: 1 }}>
          <Grid container sx={{ mb: 1 }} rowGap={1}>
            <Grid item xs={12} md={3}>
              <StyledTextField
                placeholder="Search teacher name"
                {...register("name")}
              ></StyledTextField>
            </Grid>
            <Grid item xs={12} md={2}>
              <StyledSelect
                {...register("gender")}
                defaultValue={selectOptions.gender[0]}
              >
                {selectOptions.gender.map((gender, index) => (
                  <MenuItem key={index} value={gender}>
                    {gender}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledSelect
                {...register("status")}
                defaultValue={selectOptions.status[0]}
              >
                {selectOptions.status.map((status, index) => (
                  <MenuItem key={index} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </StyledSelect>
            </Grid>
            <Grid item xs={12} md={1}>
              <StyledButton height="25px" width="100%" type="submit">
                Filter
              </StyledButton>
            </Grid>
            <Grid item xs={12} md={1} sx={{ml: 0.25}}>
              <StyledButton height="25px" width="100%" onClick={unFilter}>
                UnFilter
              </StyledButton>
            </Grid>
            
          </Grid>
        </Box>
      </form>

      <TeachersList teachers={filteredTeachers} />
    </Box>
  );
}

export default TeachersListContents;
