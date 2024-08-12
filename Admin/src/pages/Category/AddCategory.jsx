
import { Alert, Box, Button, Grid, Typography, TextField, IconButton } from "@mui/material";
import React, { useState } from 'react';
import PageLayout from 'layouts/PageLayout';
import { useAddCategory } from "queries/ProductQuery";
import toast from "react-hot-toast";
import Input from "components/Input";
import { useNavigate } from "react-router-dom";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CancelIcon from '@mui/icons-material/Cancel';
import { Delete } from '@mui/icons-material';

const AddCategory = () => {
  const [data, setData] = useState({
    heading: '',
    subheading: '',
    describe: '',
    bulletin: [''],
    image: ''
  });
  const fileInputRef = React.useRef(null);
  const navigate = useNavigate();

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setData(prev => ({ ...prev, image: file }));
  };

  const handleChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClearImage = () => {
    setData(prev => ({ ...prev, image: null }));
  };

  const { mutateAsync: addCategory, isLoading } = useAddCategory();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!data?.heading) {
        return toast.error("heading is required");
      }
      if (!data?.subheading) {
        return toast.error("sub heading is required");
      }
      if (!data?.desc) {
        return toast.error("description is required");
      }
      if (!data?.image) {
        return toast.error("image is required");
      }

      const formData = new FormData();
      for (const key in data) {
        if (data.hasOwnProperty(key) && key !== "image" && key !== "bulletin") {
          formData.append(key, data[key]);
        }
      }
      data?.bulletin?.forEach(bul => {
        if (bul === '') {

        } else {
          return formData.append('bulletin', bul)
        }
      });
      typeof data.image === 'object' && formData.append("image", data.image, data?.image?.name);

      addCategory(formData)
        .then((res) => {
          toast.success(res?.message ?? "services added");
          navigate('/services');
        })
        .catch((err) => {
          toast.error(err?.message ?? "Something went wrong");
        });

    } catch (error) {
      console.error(error);
    }
  };

  const handleFeatureChange = (index, value) => {
    const newbulletin = [...data.bulletin];
    newbulletin[index] = value;
    setData(prevData => ({ ...prevData, bulletin: newbulletin }));
  };

  const handleAddFeature = () => {
    setData(prevData => ({ ...prevData, bulletin: [...prevData.bulletin, ''] }));
  };

  const handleRemoveFeature = (index) => {
    const newbulletin = data.bulletin.filter((_, i) => i !== index);
    setData(prevData => ({ ...prevData, bulletin: newbulletin }));
  };

  return (
    <PageLayout title={'Add services'}>
      <Box sx={{ flexGrow: 1 }} display={'flex'} justifyContent={'center'}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} maxWidth={600} py={5}>
            <Grid item xs={12} sm={12}>
              <Input
                required
                placeholder="Heading"
                id="heading"
                name="heading"
                label="heading"
                value={data?.heading || ''}
                onChange={handleChange}
                fullWidth
                autoComplete="heading"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Input
                required
                placeholder="Sub Heading"
                id="subheading"
                name="subheading"
                label="subheading"
                value={data?.subheading || ''}
                onChange={handleChange}
                fullWidth
                autoComplete="subheading"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              {data?.bulletin?.map((feature, index) => (
                <Box key={index} display="flex" alignItems="center">
                  <TextField
                    // label={`bulletin ${index + 1}`}
                    placeholder={`bulletin ${index + 1}`}
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                  {data.bulletin.length > 1 && (
                    <IconButton onClick={() => handleRemoveFeature(index)}>
                      <Delete />
                    </IconButton>
                  )}
                </Box>
              ))}
              <Button onClick={handleAddFeature} variant="contained" color="primary" fullWidth className="mt-4">
                Add Feature
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Input
                required
                id="description"
                name="desc"
                placeholder="service Description"
                label="service Description *"
                value={data?.desc || ''}
                onChange={handleChange}
                fullWidth
                autoComplete="Description"
                multiline
                rows={4}
                helperText="Short Description (about 10-20 words)"
              />
            </Grid>

            <Grid item xs={12}>
              {data?.image ? (
                <Box position="relative">
                  <img
                    style={{ width: 240, height: 135, padding: 22 }}
                    src={typeof data?.image === 'object' ? URL.createObjectURL(data.image) : `${process.env.REACT_APP_BASE_URL}/${data.image}`}
                  />
                  {/* <Button
                  
                  variant="outlined"
                  size="small"
                  
                > */}
                  <CancelIcon
                    onClick={handleClearImage}
                    sx={{ position: 'absolute', top: 5, left: 220, }}


                    fontSize="large" />
                  {/* </Button> */}
                </Box>
              ) : (
                <Box
                  sx={{
                    width: 200,
                    height: 100,
                    cursor: "pointer",
                    backgroundColor: "#212121",
                    "&:hover": {
                      backgroundColor: "#424242",
                      opacity: [0.9, 0.8, 0.7],
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                  onClick={handleFileSelect}
                >
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG Path for upload thumbnail icon */}
                  </svg>
                  <Typography sx={{ mt: 1, fontSize: 13 }}>
                    Upload Thumbnail
                  </Typography>


                </Box>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type='submit'>Add Service</Button>
            </Grid>
            <Grid item xs={12}>
              <Alert color="primary" severity="info" sx={{ mt: 3, fontSize: 13 }}>
                <ul style={{ margin: "0", padding: "0" }}>
                  <li>Make your thumbnail 1280 by 720 pixels (16:9 ratio)</li>
                  <li>Ensure that your thumbnail is less than 2MB</li>
                  <li>Use a JPG, PNG, or JPEG file format</li>
                </ul>
              </Alert>
            </Grid>
          </Grid>
        </form>
      </Box>
    </PageLayout>
  );
};

export default AddCategory;
