import "./HeaderProfile.css";

import { Box } from "@mui/material";
import { orange } from "@mui/material/colors";

function HeaderProfile() {
    let profileName = "Yarik Kornaga"

    function stringAvatar(name: string) {
        let sepName = name.split(" ");
        if(sepName[0] && sepName[1]) {
            return {
                children: sepName[0][0] + sepName[1][0],
            };
        }
        else if(sepName[0] && !sepName[1]) {
            return {
                children: sepName[0][0] + "",
            };
        }
        else {
            profileName = "Profile Name";
            return {
                children: "PN",
            };;
        }
    }

    return (
        <div className="profile">
            <div className="profile-image" style={{ backgroundColor: orange[700] }} {...stringAvatar(profileName)} />
            <div className="profile-name">{profileName}</div>
        </div>
    );
}

export default HeaderProfile;
