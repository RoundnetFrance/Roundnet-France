import Image from 'next/image';

// MUI IMPORTS
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import Stack from '@mui/material/Stack';

// MUI ICONS
import FileUploadIcon from '@mui/icons-material/FileUpload';

function TableCellFile({ value, isEditable, id, element, endpoint, tableData, setError, setSuccess }) {
  return (
    <TableCell>
      <Stack direction="row" alignItems="center"
        justifyContent="flex-start" spacing={1}>

        {isEditable && (
          <IconButton
            variant="contained"
            component="label"
            color="primary"
          >
            <FileUploadIcon />
            <input
              type="file"
              hidden
            />
          </IconButton>
        )}

        <Avatar>
          <Image
            src={value}
            layout='fill'
            objectFit='cover'
            alt={element}
          />
        </Avatar>

      </Stack>
    </TableCell>
  )
}

export default TableCellFile
