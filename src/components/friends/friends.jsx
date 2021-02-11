import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Input } from "@material-ui/core";
const FriendsPage = () => {
    const [friendEmail, setFriendEmail] = useState("")
    const handleSendRequest = ()=>{
        debugger
    }
    return (
        <div>
            <div className="commonheight"></div>
            <Box pb={1}>
                <Typography variant="h1">Manage Friedns</Typography>
            </Box>
            <Input value={friendEmail} type="text" onChange={(evt)=> setFriendEmail(evt.target.value)} placeholder="Enter friend email"></Input>
            <button onClick={handleSendRequest}>Send Request</button>
        </div>
    );
};

export default FriendsPage;
