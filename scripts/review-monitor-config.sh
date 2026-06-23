# Google Review Monitor — Hermes Cron System
#
# Architecture:
# - Cron job runs every 5 hours as a Hermes agent
# - Agent checks Google Maps listing for rating/review count changes
# - New reviews trigger AI response generation + email notification
#
# Review detection method:
# Browser-based check of the Google Maps place page
# Without sign-in: can detect rating/count changes only
# With sign-in or GBP API: can read full review content
#
# Response generation:
# Hermes generates a unique, context-aware response for each review
# Based on star rating, review content, and business voice/tone

# ---- BrandAISolutions Test Config ----
CLIENT_SLUG="brandaisolutions"
CLIENT_NAME="Brand AI Solutions"
PLACE_ID="ChIJj9ROOuImSkfTA91rP9FTRA"
CID="15205240219634848580"
MAPS_URL="https://www.google.com/maps/place/?q=place_id:ChIJj9ROOuImSkfTA91rP9FTRA"
REVIEW_LINK="https://search.google.com/local/writereview?placeid=ChIJj9ROOuImSkfTA91rP9FTRA"
NOTIFICATION_EMAIL="marcus@brandaisolutions.co.za"
CLIENT_PROFILE_DIR="/home/marcus/projects/brandaisolutions/gbp-clients/brandaisolutions"
BASELINE_FILE="${CLIENT_PROFILE_DIR}/reviews/baseline.json"
REVIEWS_DIR="${CLIENT_PROFILE_DIR}/reviews"
