import React from 'react'

import styled, { ThemeProvider } from 'styled-components'

const StyledPage = styled.section`
    width: 1200px;
    margin: auto;
`
const theme = {
    primary: 'green',
}

export default function Page({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <StyledPage>{children}</StyledPage>
        </ThemeProvider>
    )
}
