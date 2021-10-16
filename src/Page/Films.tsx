import { FC, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { movieSelector, getMovieAction } from "../global/RTK/movieSearchAction";
import { Pane, majorScale, Button } from "evergreen-ui";

const Films: FC = () => {
  let data: any = useParams();
  let qurey = data.params;
  const dispatch = useDispatch();
  const { movieData } = useSelector(movieSelector);
  useEffect(() => {
    dispatch(getMovieAction(qurey));
  }, [qurey]);
  return (
    <div className="film_banner">
      <Pane
        className="flim_card"
        paddingTop="50px"
        padding="20px"
        marginX={majorScale(3)}
      >
        {!movieData  ? (
          <div>
            <h1 className="flim_header">Sorry No Result For Yor Search</h1>
          </div>
        ) : (
          <div>
            {" "}
            <h1 className="flim_header">title</h1>
            <p className="flim_txt">{movieData?.title}</p>
            <hr />
            <h1 className="flim_header">Director</h1>
            <p className="flim_txt">{movieData?.director}</p>
            <hr />
            <h1 className="flim_header">Producer</h1>
            <p className="flim_txt">{movieData?.producer}</p>
            <hr />
            <h1 className="flim_header">Release Date</h1>
            <p className="flim_txt">{movieData?.release_date}</p>
            <hr />
          </div>
        )}

        <div style={{ marginTop: "50px" }}>
          <Link
            to={{
              pathname: "/",
            }}
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <Button marginRight={16} appearance="primary" intent="success">
              Home
            </Button>
          </Link>
        </div>
      </Pane>
    </div>
  );
};

export default Films;
