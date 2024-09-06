import * as moment from 'moment';

export const getGreeting = () => {
  const hour = moment().hour();
  if (hour >= 5 && hour < 12) {
    return 'Good morning';
  }
  if (hour >= 12 && hour < 18) {
    return 'Good afternoon';
  }
  if (hour >= 18 && hour < 22) {
    return 'Good evening';
  }
  return 'Good night';
};

export const message = (name: string, host: string) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          body {
              font-family: 'Georgia', 'Times New Roman', Times, serif;
              font-weight: 400;
              line-height: 1.6;
              color: #333;
          }
          h1, h2 {
              color: #0056b3;
          }
          p {
              margin-bottom: 1em;
          }
          ul {
              margin-bottom: 1em;
              padding-left: 20px;
          }
          a {
              color: #0056b3;
              text-decoration: none;
          }
      </style>
      <title>Communicate 360 - Marketing Solutions</title>
  </head>
  <body>
      <p>Dear ${name},</p>

      <p>As a valued member of the <strong>Hispanic Chamber of Commerce of Metro Orlando</strong>, you know how crucial it is to make your business stand out in a competitive market. At <strong>Communicate 360</strong>, we’re here to simplify your marketing efforts by offering a full suite of services, making us your one-stop destination for all your marketing needs.</p>

      <h2>Why Choose Communicate 360?</h2>
      <p>We specialize in providing everything you need to effectively promote your business. Whether it's high-quality digital printing, striking LED neon signs, or innovative trade show displays, we have the tools to make your brand shine.</p>

      <h2>Our Services Include:</h2>
      <ul>
          <li><strong>Digital Printing & Mailing:</strong> From concepts to finished products, we handle everything.</li>
          <li><strong>LED Neon Signs & Acrylic Prints:</strong> Create lasting impressions with custom-designed signs.</li>
          <li><strong>Apparel Decoration:</strong> Stand out with branded apparel that speaks for your business.</li>
          <li><strong>Promotional Products:</strong> Keep your brand top-of-mind with unique, customized items.</li>
          <li><strong>Graphic Wraps & Lettering:</strong> Transform vehicles and spaces with our wraps and lettering.</li>
          <li><strong>Channel Letters & Signage:</strong> Enhance your storefront with professional signage.</li>
          <li><strong>Trade Show Displays & Banners:</strong> Make a powerful statement at any event.</li>
      </ul>

      <p>We’ve attached a small catalog showcasing some of the jobs we've done, giving you a glimpse into the quality and creativity we bring to every project.</p>

      <p>As a member of the Hispanic Chamber of Commerce, we’re pleased to offer you an exclusive discount of <strong>15% on your first order</strong>. (Valid until September 30th, 2024)</p>

      <p>Ready to take your marketing to the next level? Contact us today at <a href="mailto:luis@communicate360.net">luis@communicate360.net</a> or visit our website at <a href="https://www.communicate360.net">Communicate360.net</a> to discuss your next project. Let’s create something amazing together!</p>

      <p>Thank you for considering <strong>Communicate 360</strong> as your trusted marketing partner. We’re excited to collaborate with you and help your business reach new heights.</p>

      <p>Best regards,</p>
      <p>Luis Quiroz<br>Communicate 360</p>

      <p>P.S. Don’t forget to check out the attached catalog for inspiration and follow us on social media for updates and special offers!</p>

      <p style="display: flex; align-items: center;">
          <a href="https://www.facebook.com/communicate360" target="_blank" style="margin-right: 10px; text-decoration: none;">
              <span style="display: inline-block; width: 30px; height: 30px; background-color: #4267B2; border-radius: 50%; text-align: center; line-height: 30px;">
                  <img src="https://i.ibb.co/xDLb6zv/facebook-01.png" alt="Facebook" style="width: 16px; height: 16px;">
              </span>
          </a>
          <a href="https://www.youtube.com/@communicate360" target="_blank" style="margin-right: 10px; text-decoration: none;">
              <span style="display: inline-block; width: 30px; height: 30px; background-color: #FF0000; border-radius: 50%; text-align: center; line-height: 30px;">
                  <img src="https://i.ibb.co/WH3sFJc/youtube-01.png" alt="YouTube" style="width: 20px; height: 16px;">
              </span>
          </a>
          <a href="https://www.instagram.com/communicate360/" target="_blank" style="margin-right: 10px; text-decoration: none;">
              <span style="display: inline-block; width: 30px; height: 30px; background-color: #E1306C; border-radius: 50%; text-align: center; line-height: 30px;">
                  <img src="https://i.ibb.co/DLKcW88/instagram-01.png" alt="Instagram" style="width: 16px; height: 16px;">
              </span>
          </a>
          <a href="https://www.linkedin.com/company/communicat360/" target="_blank" style="text-decoration: none;">
              <span style="display: inline-block; width: 30px; height: 30px; background-color: #0077B5; border-radius: 50%; text-align: center; line-height: 30px;">
                  <img src="https://i.ibb.co/F7LsLsP/linkedin-01.png" alt="LinkedIn" style="width: 16px; height: 16px;">
              </span>
          </a>
      </p>



    <table style="max-width: 37.5em; position: relative" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" align="center">
        <tbody>
          <tr style="width: 100%;">
            <td>
              <div class="">
                <table align="center" width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" class="p-container main-container" data-name="Menu 3" label="Menu 3" style="
                    max-width: 37.5em;
                    position: relative;
                    padding: 0px 28px 0px 0px;
                    background-color: rgb(65, 184, 146);
                  " draggable="false">
                  <tbody>
                    <tr style="width: 100%;/* height: 20px; */">
                      <td>
                        <table align="center" width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                          <tbody style="width: 100%">
                            <tr style="width: 100%; height: 40px">
                              <td class="p-hover-tools" align="left" style="width: 100%">
                                <a target="_blank" href="https://example.com" style="
                                    color: rgb(6, 125, 247);
                                    text-decoration: none;
                                  " draggable="false"><img src="https://i.ibb.co/gy4r7yk/logo-animado-c360.gif" alt="Some alt" style="
                                      display: block;
                                      outline: none;
                                      border: none;
                                      text-decoration: none;
                                      width: 160px;
                                    " draggable="false"></a>
                              </td>
                              <td class="e-list p-hover-tools">
                                <table align="right" width="auto" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                  <tbody style="width: 100%">
                                    <tr style="width: 100%">
                                      <td class="link" style="padding-right: 18px">
                                        <a target="_blank" href="https://www.facebook.com/communicate360" style="
                                            color: rgb(6, 125, 247);
                                            text-decoration: none;
                                          " draggable="false"><img src="https://i.ibb.co/xDLb6zv/facebook-01.png" alt="Some alt" style="
                                              display: block;
                                              outline: none;
                                              border: none;
                                              text-decoration: none;
                                              width: 16px;
                                              height: 16px;
                                            " draggable="false"></a>
                                      </td>
                                      <td class="link" style="padding-right: 18px">
                                        <a target="_blank" href="https://www.youtube.com/@communicate360" style="
                                            color: rgb(6, 125, 247);
                                            text-decoration: none;
                                          " draggable="false"><img src="https://i.ibb.co/WH3sFJc/youtube-01.png" alt="Some alt" style="
                                              display: block;
                                              outline: none;
                                              border: none;
                                              text-decoration: none;
                                              width: 19px;
                                              height: 16px;
                                            " draggable="false"></a>
                                      </td>
                                      <td class="link" style="padding-right: 18px">
                                        <a target="_blank" href="https://www.instagram.com/communicate360/" style="
                                            color: rgb(6, 125, 247);
                                            text-decoration: none;
                                          " draggable="false"><img src="https://i.ibb.co/DLKcW88/instagram-01.png" alt="Some alt" style="
                                              display: block;
                                              outline: none;
                                              border: none;
                                              text-decoration: none;
                                              width: 16px;
                                              height: 16px;
                                            " draggable="false"></a>
                                      </td>
                                      <td class="link" style="padding-right: 0px">
                                        <a target="_blank" href="https://www.linkedin.com/company/communicat360/" style="
                                            color: rgb(6, 125, 247);
                                            text-decoration: none;
                                          " draggable="false"><img src="https://i.ibb.co/F7LsLsP/linkedin-01.png" alt="Some alt" style="
                                              display: block;
                                              outline: none;
                                              border: none;
                                              text-decoration: none;
                                              width: 16px;
                                              height: 16px;
                                            " draggable="false"></a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table align="center" width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" class="p-container main-container" data-name="Header 1" label="Header 1" style="
                    max-width: 37.5em;
                    position: relative;
                    padding: 0px 0px 200px;
                    background-color: rgb(34, 34, 34);
                    background-image: url('https://i.ibb.co/BjQytWk/gif-completo.gif');
                    background-size: cover;
                    background-position: center top;
                  " draggable="false">
                  <tbody>
                    <tr style="width: 100%">
                      <td>
                        <table align="center" width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                          <tbody style="width: 100%">
                            <tr style="width: 100%"></tr>
                          </tbody>
                        </table>
                        <!---->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
</html>
`;
