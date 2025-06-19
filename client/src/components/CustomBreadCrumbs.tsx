import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import"./CustomBreadCrumbs.scss";

const CustomBreadCrumbs: React.FC<{replacetext: string}> = ({replacetext}) => {
    return(
    <div style={{paddingLeft: "16px"}}>
            <Breadcrumbs aria-label="breadcrumb" sx = {{ '& .css-jhr02i-MuiBreadcrumbs-separator': {marginLeft: "2px", marginRight: "6px", color: "#0F93FF"}}}>

                <Link underline="hover" color="#0F93FF" href="/">
                <p className="words">Home</p>
                </Link>

                <Link
                underline="hover"
                color="#84878A"
                href="/activity-history"
                aria-current="page"
                >
                <p className="words">{replacetext}</p>
                </Link>

            </Breadcrumbs>
    </div>
);
}

export default CustomBreadCrumbs