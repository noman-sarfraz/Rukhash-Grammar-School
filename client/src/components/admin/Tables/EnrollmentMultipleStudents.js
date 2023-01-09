import { Box, Checkbox, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { checkAllCheckboxes, uncheckAllCheckboxes } from "../../../utils/dom";
import StyledDatePicker from "../../styled/StyledDatePicker";
import StyledSelect from "../../styled/StyledSelect";
import StyledTextField from "../../styled/StyledTextField";
import { useForm } from "react-hook-form";
import StyledLoadingButton from "../../styled/StyledLoadingButton";
import Asterisk from "../../common/Asterisk";
import { useCreateManyStudentsMutation } from "../../../features/students/studentsApiSlice";
import { toast } from "react-toastify";
import { RegNoSuggestionWithIncrement } from "../../../utils/RegNoSuggestion";

const selectOptions = {
  classes: [
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
  genders: ["Male", "Female", "Other"],
};

  let checklist = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  const initialState = {
    regNo: "",
    rollNo: "",
    name: "",
    fatherName: "",
    class: "",
    motherName: "",
    dateOfBirth: "",
    admissionDate: "",
    gender: "",
    category: "",
    religion: "",
    bloodGroup: "",
    status: "",
    phoneOffice: "",
    phoneResidence: "",
    mobileOffice: "",
    mobileResidence: "",
    email: "",
    cnicNo: "",
    bFormNo: "",
    address: "",
    city: "",
    country: "",
    monthlyFee: "",
    admissionFee: "",
    transportFee: "",
    routes: "",
    comments: "",
    password: "",
    loginStatus: "",
    picture: "",
  };

function EnrollmentMultipleStudents({ lastRegNo }) {
  const [createManyStudents, { isLoading, isError, error }] =
    useCreateManyStudentsMutation();

  const [checks, setChecks] = useState(checklist);

  const handleChange = (id) => {
    // console.log(id);
    setChecks((checks) => {
      let newChecks = [...checks];
      newChecks[id] = !newChecks[id];
      return newChecks;
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const reverseAllChecks = () => {
    if (document.getElementById("headCheckbox").checked) {
      checkAllCheckboxes("studentSelecter", 10, 1);
    } else {
      uncheckAllCheckboxes("studentSelecter", 10, 1);
    }
  };

  const check = (id) => {
    try {
      return document.getElementById(`studentSelecter-${id}`).checked;
    } catch (e) {
      // console.log("errorrrrrrrrrrrrrrrrrrr:")
      // console.log(id, document.getElementById(`studentSelecter-${id}`));
      console.log(e);
    }
  };

  const onSubmit = async (data) => {
    // console.log(data);
    let students = [];
    for (let i = 1; i <= 10; i++) {
      if (check(i)) {
        students.push({
          ...initialState,
          regNo: data[`regNo-${i}`],
          rollNo: data[`rollNo-${i}`],
          name: data[`name-${i}`],
          fatherName: data[`fatherName-${i}`],
          mobileResidence: data[`mobileResidence-${i}`],
          class: data[`class-${i}`],
          gender: data[`gender-${i}`],
          monthlyFee: data[`monthlyFee-${i}`],
        });
      }
    }

    const res = await createManyStudents(students);
    console.log("res:", res.data);
    // console.log("students:", students);
  };

  if (isError) {
    console.log("error:", error);
    // toast.error(error);
  }

  return (
    <div>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <table className="custom-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  id="headCheckbox"
                  onChange={reverseAllChecks}
                ></input>
              </th>
              <th>
                Reg # <Asterisk />
              </th>
              <th>
                Roll # <Asterisk />
              </th>
              <th>
                Student Name <Asterisk />
              </th>
              <th>Father Name </th>
              <th>Mobile #</th>
              <th>
                Class <Asterisk />
              </th>
              <th> Gender </th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <tr key={item}>
                <td>
                  <input
                    name={`studentSelecter-${index + 1}`}
                    type="checkbox"
                    id={`studentSelecter-${index + 1}`}
                    // {...register(`studentSelecter-${index + 1}`)}
                    value={checks[index]}
                    onChange={(e) => handleChange(index)}
                  ></input>
                </td>
                <td>
                  <StyledTextField
                    {...register(`regNo-${index + 1}`, {
                      required: checks[index],
                    })}
                    defaultValue={RegNoSuggestionWithIncrement(lastRegNo, index+1)}
                    // required={check(index + 1)}
                    error={errors[`regNo-${index + 1}`] ? true : false}
                  ></StyledTextField>
                </td>
                <td>
                  <StyledTextField
                    {...register(`rollNo-${index + 1}`, {
                      required: checks[index],
                    })}
                    error={errors[`rollNo-${index + 1}`] ? true : false}
                  ></StyledTextField>
                </td>
                <td>
                  <StyledTextField
                    {...register(`name-${index + 1}`, {
                      required: checks[index],
                    })}
                    error={errors[`name-${index + 1}`] ? true : false}
                  ></StyledTextField>
                </td>
                <td>
                  <StyledTextField
                    {...register(`fatherName-${index + 1}`)}
                  ></StyledTextField>
                </td>
                <td>
                  <StyledTextField
                    {...register(`mobileResidence-${index + 1}`)}
                  ></StyledTextField>
                </td>
                <td>
                  <StyledSelect
                    width={125}
                    {...register(`class-${index + 1}`, {
                      required: checks[index],
                    })}
                    // required={checks[index]}
                    error={errors[`class-${index + 1}`] ? true : false}
                  >
                    {selectOptions.classes.map((className, index) => (
                      <MenuItem key={index} value={className}>
                        {className}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </td>
                <td>
                  <StyledSelect
                    width={100}
                    {...register(`gender-${index + 1}`)}
                  >
                    {selectOptions.genders.map((className, index) => (
                      <MenuItem key={index} value={className}>
                        {className}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </td>
                <td>
                  <StyledTextField
                    width={75}
                    {...register(`monthlyFee-${index + 1}`)}
                  ></StyledTextField>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Box sx={{ mt: 2, px: { xs: 0, md: 5 } }}>
          <StyledLoadingButton
            loading={isLoading}
            type="submit"
            width={{ xs: "100%" }}
          >
            Add Students
          </StyledLoadingButton>
        </Box>
      </form>
    </div>
  );
}

export default EnrollmentMultipleStudents;
