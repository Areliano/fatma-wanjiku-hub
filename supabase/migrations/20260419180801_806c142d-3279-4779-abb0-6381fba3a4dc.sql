-- Create public assets bucket for OG image and other public files
INSERT INTO storage.buckets (id, name, public) VALUES ('public-assets', 'public-assets', true);

-- Policy: Allow public read access
CREATE POLICY "Public assets are accessible to everyone" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'public-assets');

-- Policy: Allow authenticated uploads
CREATE POLICY "Authenticated users can upload to public assets" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'public-assets' AND auth.role() = 'authenticated');