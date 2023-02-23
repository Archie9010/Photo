import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData();

  return (
    <Container
      className={`${appStyles.Content}"bg-dark text-white" ${
        mobile && "d-lg-none text-center mb-3 bg-dark text-white"
      }`}
    >
      {popularProfiles.results.length ? (
        <>
          <h4 className="text-center text-white">Popular Profiles</h4><hr color="white"/>
          {mobile ? (
            <div className="d-flex justify-content-around ">
              {popularProfiles.results.slice(0, 5).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            popularProfiles.results.slice(0, 6).map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;