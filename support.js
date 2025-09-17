

document.addEventListener('DOMContentLoaded', function() {
    const supportLinks = document.querySelectorAll('.support-link');
    const supportModal = document.getElementById('support-modal');
    const supportClose = document.getElementById('support-close');
    const modalTitle = document.getElementById('support-modal-title');
    const modalBody = document.getElementById('support-modal-body');

    // Support content data
    const supportContent = {
        faq: {
            title: "Frequently Asked Questions",
            content: `
                <div class="support-section">
                    <h4>Common Questions</h4>
                    <ul class="support-list">
                        <li><strong>Q: How long does shipping take?</strong><br>A: Typically 3-5 business days for standard shipping.</li>
                        <li><strong>Q: Do you offer international shipping?</strong><br>A: Yes, we ship to over 50 countries worldwide.</li>
                        <li><strong>Q: How can I track my order?</strong><br>A: You'll receive a tracking number via email once your order ships.</li>
                        <li><strong>Q: What payment methods do you accept?</strong><br>A: We accept all major credit cards, PayPal, and Apple Pay.</li>
                    </ul>
                </div>
            `
        },
        shipping: {
            title: "Shipping Information",
            content: `
                <div class="support-section">
                    <h4>Shipping Options</h4>
                    <ul class="support-list">
                        <li><strong>Standard Shipping:</strong> 3-5 business days - $20.99</li>
                        <li><strong>Express Shipping:</strong> 2-3 business days - $29.99</li>
                        <li><strong>Next Day Delivery:</strong> 1 business day - $39.99</li>
                        <li><strong>Free Shipping:</strong> Available on orders over $50</li>
                    </ul>
                </div>
                <div class="support-section">
                    <h4>Delivery Areas</h4>
                    <p>We deliver to all 50 US states and internationally to select countries. International shipping times may vary from 7-14 business days.</p>
                </div>
            `
        },
        returns: {
            title: "Returns & Exchanges",
            content: `
                <div class="support-section">
                    <h4>Return Policy</h4>
                    <p>We offer a 30-day return policy on all unused items in their original packaging. Returns are free for US customers.</p>
                </div>
                <div class="support-section">
                    <h4>How to Return</h4>
                    <ol>
                        <li>Log into your account and go to Order History</li>
                        <li>Select the item(s) you wish to return</li>
                        <li>Print the prepaid return label</li>
                        <li>Drop off at any UPS location</li>
                    </ol>
                </div>
                <div class="support-section">
                    <h4>Exchange Process</h4>
                    <p>Exchanges are processed within 1-2 business days of receiving your return. You'll receive email confirmation at each step.</p>
                </div>
            `
        },
        warranty: {
            title: "Product Warranty",
            content: `
                <div class="support-section">
                    <h4>Warranty Coverage</h4>
                    <p>All products come with a standard 1-year manufacturer's warranty against defects in materials and workmanship.</p>
                </div>
                <div class="support-section">
                    <h4>Extended Warranty</h4>
                    <p>For an additional fee, you can extend your warranty coverage to 2 or 3 years. This must be purchased at the time of original order.</p>
                </div>
                <div class="support-section">
                    <h4>Warranty Claims</h4>
                    <p>To make a warranty claim, please contact our support team with your order number and a description of the issue. We'll guide you through the process.</p>
                </div>
            `
        },
        contact: {
            title: "Contact Support",
            content: `
                <div class="contact-info">
                    <h4>Get in Touch</h4>
                    <p>Our support team is available to help you with any questions or concerns.</p>
                    
                    <div class="support-section">
                        <h4>Contact Methods</h4>
                        <ul class="support-list">
                            <li><strong>Email:</strong> support@gharbazar.com</li>
                            <li><strong>Phone:</strong> 1-800-NEXUS-TECH (9093563181)</li>
                            <li><strong>Live Chat:</strong> Available Mon-Fri, 9AM-6PM EST</li>
                            <li><strong>Response Time:</strong> Typically within 24 hours</li>
                        </ul>
                    </div>
                    
                    <div class="support-section">
                        <h4>Business Hours</h4>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM EST<br>
                        Saturday: 10:00 AM - 4:00 PM EST<br>
                        Sunday: Closed</p>
                    </div>
                </div>
            `
        }
    };

    // Add click event to all support links
    supportLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentType = this.getAttribute('data-type');
            openSupportModal(contentType);
        });
    });

    // Close modal events
    supportClose.addEventListener('click', closeSupportModal);
    window.addEventListener('click', function(e) {
        if (e.target === supportModal) {
            closeSupportModal();
        }
    });

    // Open modal function
    function openSupportModal(type) {
        if (supportContent[type]) {
            modalTitle.textContent = supportContent[type].title;
            modalBody.innerHTML = supportContent[type].content;
            supportModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    }

    // Close modal function
    function closeSupportModal() {
        supportModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && supportModal.style.display === 'block') {
            closeSupportModal();
        }
    });
});
 