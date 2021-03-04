import React from "react";
const UserRow = ({ isProjectOpen }) => {
    return (
        <div className={isProjectOpen ? "table_row project-open" : "table_row"}>
            <div className="progress-name ">
                <div class="table">
                    <div class="theader">
                        <div class="table_header">
                            <div class="new-checkbox">
                                <div class="form-group">
                                    <input type="checkbox" id="maincheck" />
                                    <label for="maincheck"></label>
                                </div>
                            </div>
                        </div>
                        <div class="table_header name-head">
                            FIRST{" "}
                            <svg
                                width="15"
                                height="10"
                                viewBox="0 0 19 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.4609 0.464844L18.4346 3.61426L9.25 12.4473L0.753906 3.40918L4.00586 0.494141L9.42578 6.4707L15.4609 0.464844Z"
                                    fill="#A6A6A6"
                                />
                            </svg>
                        </div>
                        <div class="table_header name-head">
                            LAST{" "}
                            <svg
                                width="16"
                                height="10"
                                viewBox="0 0 19 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.4609 0.464844L18.4346 3.61426L9.25 12.4473L0.753906 3.40918L4.00586 0.494141L9.42578 6.4707L15.4609 0.464844Z"
                                    fill="#A6A6A6"
                                />
                            </svg>
                        </div>
                    </div>
                    <div class="table_row">
                        <div class="table_small">
                            <div class="table_cell">
                                <div class="new-checkbox">
                                    <div class="form-group">
                                        <input type="checkbox" id="check1" />
                                        <label for="check1"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="table_small">
                            <div class="table_cell">avinash</div>
                        </div>
                        <div class="table_small">
                            <div class="table_cell">avinash</div>
                        </div>
                    </div>

                    <div class="table_row">
                        <div class="table_small">
                            <div class="table_cell">
                                <div class="new-checkbox">
                                    <div class="form-group">
                                        <input type="checkbox" id="check2" />
                                        <label for="check2"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="table_small">
                            <div class="table_cell">avinash</div>
                        </div>
                        <div class="table_small">
                            <div class="table_cell">avinash</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserRow;