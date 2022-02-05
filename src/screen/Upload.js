import { gql, useMutation, useQuery } from "@apollo/client";
import React from "react";
import { UploadContainer } from "./Upload.styled";

const QUERY = gql`
  query me {
    me {
      username
    }
  }
`
;

const MUTATION = gql`
  mutation createCourse($input: CourseInput) {
    createCourse(input: $input)
  }
`;

const Upload = () => {
  let name;
  let description;

  const { data, loading } = useQuery(QUERY)
  const [createCourse, { loading: createLoading }] = useMutation(MUTATION, {
    onCompleted: (data) => {
      if (data) {
        window.location.replace('/')
      }
    }
  })

  if (!data || loading) return <></>

  const onHandleCourse = (e) => {
    e.preventDefault();

    console.log(data?.me?.username)

    createCourse({
      variables: {
        input: {
          name: name.value,
          author: "teacher"
        }
      }
    })
  }

  return (
    <UploadContainer>
      <div className="container top">
        <h5>Upload video</h5>
      </div>
      <div className="container bottom">
        <div className="inputform">
          <form action="">
            <label>
              Title
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              placeholder="write here"

              ref={(node) => name = node}
            ></textarea>
            <label htmlFor="label1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              placeholder="write here"

              ref={(node) => description = node}
            ></textarea>

            <label htmlFor="label2" className="form-label">
              select lesson that you want to upload
            </label>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                onClick={(e) => onHandleCourse(e)}
                disabled={createLoading ? true : false}
              >
                Module
              </button>
              {/* <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Module 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Module 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Module 3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Module 4
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Module 5
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Module 6
                  </a>
                </li>
              </ul> */}
            </div>
          </form>
        </div>
        <div className="upload-video">
          <p>Drag & drop your files here or</p>
          <div className="upload-btn-wrapper">
            <button className="btn1">browse</button>
            <input type="file" name="myfile" />
          </div>
        </div>
        <div className="submit">
          <button className="btn2" onClick={(e) => onHandleCourse(e)} disabled={createLoading ? true : false}>submit</button>
        </div>
      </div>
    </UploadContainer>
  );
};

export default Upload;