import { FC, useState, useEffect } from "react";
import { Pane, Text, majorScale, Button } from "evergreen-ui";
import { Link } from "react-router-dom";
import { AutoSuggest } from "react-autosuggestions";
const Home: FC = () => {
  const [searchQurey, setSearchQurey] = useState<string>("");
  const [autoComplete, setAutoComplete] = useState<[]>([]);
  const saveAutoCompleteData = (value: string) => {
    let data = [];
    data.push(...autoComplete, value);
    localStorage.setItem("autoCompleteData", JSON.stringify(data));
  };
  useEffect(() => {
    if (localStorage.getItem("autoCompleteData")) {
      let data: any = localStorage.getItem("autoCompleteData");
      let value = JSON.parse(data);
      setAutoComplete(value);
    }
  }, []);

  // const mediaQuery = window.matchMedia("max-width: 480px");
  // let inputWidth = mediaQuery ? "80vw" : "60vw";
  return (
    <div className="home_banner">
      <Pane marginX={majorScale(2)}>
        <div className="home_banner_content">
          <h1 className="home_banner_text">Search Movies</h1>
          <div>
            <AutoSuggest
              name="."
              styles={{
                announcement: {
                  position: "absolute",
                  clip: "rect(0 0 0 0)",
                  clipPath: "inset(50%)",
                  height: "1px",

                  overflow: "auto",
                },
                combobox: {
                  display: "inline-block",
                },
                searchField: {
                  padding: ".9.50rem",
                  border: "2px solid #c8c8c8",
                  backgroundColor: "#fff",
                  borderRadius: "30px",
                  color: "#000",
                  fontWeight: "normal",
                  fontSize: "15px",
                  margin: "0 auto",
                  width: "320px",
                  height: "40px",
                  focus: {
                    color: "#000",
                    border: "2px solid #005499",
                    outline: "none",
                  },
                },
                searchLabel: {
                  display: "none",
                  fontSize: "1.35rem",
                },
                suggestionsContainer: {
                  display: "block",
                  position: "absolute",
                  border: "1px solid #999",
                  background: "#fff",
                  width: "320px",
                },
                suggestionOptions: {
                  margin: "0",
                  padding: "0",
                  listStyle: "none",
                },
                suggestionOption: {
                  margin: "0",
                  padding: ".5rem",
                  fontSize: "15px",
                  whiteSpace: "nowrap",
                  overflow: "auto",
                  cursor: "default",
                },
              }}
              options={autoComplete}
              handleChange={setSearchQurey}
              value={searchQurey}
            />

            <Link
              to={{
                pathname: `/films/${searchQurey}`,
              }}
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
            >
              <Button
                width="320px"
                justifyContent="center"
                alignItems="center"
                marginTop="30px"
                borderRadius="30px"
                height="40px"
                marginRight={16}
                onClick={() => saveAutoCompleteData(searchQurey)}
                appearance="primary"
                intent="success"
              >
                Search Now
              </Button>
            </Link>
          </div>
        </div>
      </Pane>
    </div>
  );
};

export default Home;
