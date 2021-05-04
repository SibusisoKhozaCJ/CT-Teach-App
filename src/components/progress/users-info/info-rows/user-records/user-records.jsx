import React from "react"

const UserRecord = ({ progress }) => {
    return (
        <div className="table_row">

            <div className="table_small">
                <div className="table_cell tranee-firstName">{progress.userInfo.firstname}</div>
            </div>
            <div className="table_small">
                <div className="table_cell tranee-lastName">{progress.userInfo.lastname ? progress.userInfo.lastname : progress.userInfo.firstname}</div>
            </div>
        </div>

    )

}

export default UserRecord;