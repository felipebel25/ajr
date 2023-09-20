import { Box, Typography } from "@mui/material"
import { styles } from "./stylesEmpowerYourBusiness"

export const EmpowerYourBusiness = () => {
    return (
        <Box sx={styles.main}>
            <Typography sx={styles.title}>Empower your business<br />
                with our services</Typography>
            <Typography sx={styles.text}>We understand that managing accounting and bookkeeping can be complex and time-consuming. That’s why we offer a range of accounting and tax services in New Jersey and New York to meet your specific needs, including bookkeeping, tax preparation, payroll management, financial planning, and audit and assurance.</Typography>
        </Box>
    )
}
