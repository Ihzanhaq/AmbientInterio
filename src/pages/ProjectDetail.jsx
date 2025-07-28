// src/pages/ProjectDetail.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { getPostBySlug, getMedia } from '../services/wordpressService';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);
  const [projectVideos, setProjectVideos] = useState([]);


  useEffect(() => {
    const fetchProject = async () => {
      const data = await getPostBySlug('projects', slug);
      setProject(data);
    const localVideoFields = ["video_url_1", "video_url_2"];
    const localVideos = [];

    for (const field of localVideoFields) {
      if (data.acf[field]) {
        const file = await getMedia(data.acf[field]);
        localVideos.push(file.source_url); // Just the URL
      }
    }
    setProjectVideos(localVideos);



      
      const galleryFields = [
        "gallery_image_1",
        "gallery_image_2",
        "gallery_image_3",
      ]; // add more if needed
      const gallery = [];

      for (const field of galleryFields) {
        if (data.acf[field]) {
          const media = await getMedia(data.acf[field]);
          gallery.push(media);
        }
      }
      setGalleryImages(gallery);

      
      setLoading(false);
    };

    fetchProject();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!project) return <div>Project not found</div>;

  return (
    <ProjectDetailContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <ProjectHeader>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.title.rendered}
          </motion.h1>

          <ProjectMeta>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span>Client:</span> {project.acf?.client || "N/A"}
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span>Location:</span> {project.acf?.location || "N/A"}
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span>Year:</span> {project.acf?.year || "N/A"}
            </motion.div>
          </ProjectMeta>
        </ProjectHeader>

        <FeaturedImage>
          {project._embedded?.["wp:featuredmedia"]?.[0] && (
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              src={project._embedded["wp:featuredmedia"][0].source_url}
              alt={project.title.rendered}
            />
          )}
        </FeaturedImage>

        <ProjectContent>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="content"
            dangerouslySetInnerHTML={{ __html: project.content.rendered }}
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="details"
          >
            <h3>Project Details</h3>
            <ul>
              {project.acf?.details &&
                Object.entries(project.acf.details).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
            </ul>
          </motion.div>
        </ProjectContent>

        {galleryImages.length > 0 && (
          <ProjectGallery>
            <h3>Gallery</h3>
            <GalleryGrid>
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="gallery-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img src={image.source_url} alt={image.alt_text} />
                </motion.div>
              ))}
            </GalleryGrid>
          </ProjectGallery>
        )}
        {projectVideos.length > 0 && (
          <ProjectVideos>
            <h3>Project Videos</h3>
            <div className="video-grid">
              {projectVideos.map((vid, index) => (
                <motion.div
                  key={index}
                  className="video-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="video-wrapper">
                    <video
                      controls
                      width="100%"
                      style={{
                        borderRadius: "10px",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                      }}
                    >
                      <source src={vid} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </motion.div>
              ))}
            </div>
          </ProjectVideos>
        )}
      </motion.div>
    </ProjectDetailContainer>
  );
};

const ProjectDetailContainer = styled.div`
  padding: 5rem 0;
`;

const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  
  div {
    span {
      font-weight: 600;
      color: var(--accent-color);
    }
  }
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const FeaturedImage = styled.div`
  margin-bottom: 3rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  .content {
    line-height: 1.8;
    
    p {
      margin-bottom: 1.5rem;
    }
  }
  
  .details {
    h3 {
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
    }
    
    ul {
      list-style: none;
      
      li {
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #eee;
        
        strong {
          color: var(--primary-color);
        }
      }
    }
  }
`;

const ProjectGallery = styled.div`
  h3 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  .gallery-item {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    
    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      display: block;
    }
  }
`;
const ProjectVideos = styled.div`
  margin-top: 5rem;

  h3 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }

  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .video-item {
    text-align: center;

    .video-wrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      margin-bottom: 1rem;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
      }
    }

    p {
      color: #666;
      font-size: 0.95rem;
    }
  }
`;


export default ProjectDetail;