import React from "react";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import "../../styles/components/contact.scss";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === '#faa307' ? '#9e2a2b' : '#faa307',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ItemContact = ({ contact }) => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>
                        <FontAwesomeIcon icon={faPhone} className="font-contact"/>
                        <br />
                        <span className="item-contact">{contact.phone}</span>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <FontAwesomeIcon icon={faAt} className="font-contact"/>
                        <br />
                        <span className="item-contact">{contact.email}</span>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <FontAwesomeIcon icon={faMapLocation} className="font-contact"/>
                        <br />
                        <span className="item-contact">{contact.location}</span>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ItemContact;