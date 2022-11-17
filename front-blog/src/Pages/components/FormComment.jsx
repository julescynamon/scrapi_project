import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function FormComment() {
    return (
        <div>
            <form>
            <TextField
                id="standard-text-input"
                label="Nom"
                type="text"
                variant="standard"
            />
            <TextField
                id="standard-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="standard"
            />
            <Button variant="contained">Default</Button>
            </form>
        </div>
    )
}
